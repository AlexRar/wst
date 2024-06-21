import TrackerException from '../store/tracker-exception.js';
import { init, TRACKERDB_ENGINE, get } from './engines.js';
import store from '../node_modules/hybrids/src/store.js';

/**
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2017-present Ghostery GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

// TODO: remove after sunsetting Ghostery 8
// This code is a duplicate of '@ghostery/ui/categories'
// It's a walkaround to deal with WebPack problems with import.meta in @ghostery/ui when using type=module
const categoryOrder = [
  'advertising',
  'site_analytics',
  'consent',
  'essential',
  'hosting',
  'customer_interaction',
  'audio_video_player',
  'cdn',
  'comments',
  'email',
  'extensions',
  'misc',
  'pornvertising',
  'social_media',
  'telemetry',
  'unidentified',
  'other',
];

let promise = Promise.all([
  store.resolve([TrackerException]),
  init(TRACKERDB_ENGINE).then(() => {
    promise = null;
  }),
]);

function isCategoryBlockedByDefault(categoryId) {
  switch (categoryId) {
    case 'advertising':
    case 'site_analytics':
    case 'hosting':
    case 'customer_interaction':
    case 'audio_video_player':
    case 'cdn':
    case 'email':
    case 'extensions':
    case 'misc':
    case 'pornvertising':
    case 'social_media':
    case 'unidentified':
    case undefined:
      return true;
    default:
      return false;
  }
}

function isTrusted(hostname, category, exception) {
  const isCategoryBlocked = isCategoryBlockedByDefault(category);

  if (exception.blocked) {
    return exception.trustedDomains.includes(hostname) || false;
  } else {
    return (
      !exception.blockedDomains.includes(hostname) &&
      exception.blocked !== isCategoryBlocked
    );
  }
}

function getMetadata(request) {
  if (promise) {
    console.warn('TrackerDB not ready yet');
    return null;
  }

  const engine = get(TRACKERDB_ENGINE);

  let isFilterMatched = true;
  let exception = null;
  let tracker;

  let matches = engine.getPatternMetadata(request);

  if (matches.length === 0) {
    isFilterMatched = false;
    matches = engine.metadata.fromDomain(request.domain);
  }

  if (matches.length === 0) {
    // Blobs and data URLs don't have hostnames
    if (!request.hostname) return null;

    exception = store.get(TrackerException, request.hostname);

    if (!store.ready(exception) && !request.blocked && !request.modified) {
      return null;
    }

    tracker = {
      id: request.hostname,
      name:
        request.hostname.length > 24
          ? '...' + request.hostname.slice(-24)
          : request.hostname,
      category: 'unidentified',
      exception: request.hostname,
      blockedByDefault: true,
    };
  } else {
    tracker = getTrackers().get(matches[0].pattern.key);
  }

  exception = exception || store.get(TrackerException, tracker.id);

  const metadata = {
    ...tracker,
    isFilterMatched,
    isTrusted: store.ready(exception)
      ? isTrusted(request.sourceHostname, tracker.category, exception)
      : !isCategoryBlockedByDefault(tracker.category),
  };

  return metadata;
}

const trackersMap = new Map();
function getTrackers() {
  if (!trackersMap.size) {
    const engine = get(TRACKERDB_ENGINE);
    const organizations = engine.metadata.organizations.getValues();
    const categories = engine.metadata.categories.getValues();

    for (const p of engine.metadata.getPatterns()) {
      const organization = organizations.find((o) => o.key === p.organization);

      trackersMap.set(p.key, {
        id: p.key,
        name: p.name,
        category: p.category,
        categoryDescription: categories.find((c) => c.key === p.category)
          ?.description,
        websiteUrl: p.website_url,
        exception: p.key,
        filters: p.filters,
        domains: p.domains,
        organization: organization
          ? {
              id: organization.key,
              name: organization.name,
              description: organization.description,
              country: organization.country,
              contact: organization.privacy_contact,
              websiteUrl: organization.website_url,
              privacyPolicyUrl: organization.privacy_policy_url,
            }
          : undefined,
        blockedByDefault: isCategoryBlockedByDefault(p.category),
      });
    }
  }

  return trackersMap;
}

async function getTracker(key) {
  if (promise) await promise;

  // Ensure trackers are loaded
  getTrackers();

  return trackersMap.get(key);
}

async function getSimilarTrackers(tracker) {
  if (promise) await promise;
  const result = [];

  tracker = await getTracker(tracker);
  if (!tracker.organization) return result;

  trackersMap.forEach((t) => {
    if (t.organization?.id === tracker.organization.id && t.id !== tracker.id) {
      result.push(t);
    }
  });

  return result;
}

async function getCategories() {
  if (promise) await promise;
  const engine = get(TRACKERDB_ENGINE);

  const categories = new Map(
    engine.metadata.categories.getValues().map(({ key, description }) => [
      key,
      {
        key,
        description,
        blockedByDefault: isCategoryBlockedByDefault(key),
        trackers: [],
      },
    ]),
  );

  for (const p of getTrackers().values()) {
    categories.get(p.category).trackers.push(p);
  }

  return [...categories.values()]
    .filter((c) => c.trackers.length > 0)
    .sort(
      (a, b) => categoryOrder.indexOf(a.key) - categoryOrder.indexOf(b.key),
    );
}

export { getCategories, getMetadata, getSimilarTrackers, getTracker, isCategoryBlockedByDefault, isTrusted };
