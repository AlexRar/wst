import { html } from '../../../node_modules/hybrids/src/template/index.js';

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


const __vite_glob_0_11 = {
  blocked: false,
  render: ({ blocked }) => html`
    <template layout="block">
      ${blocked
        ? html`
            <gh-settings-badge type="info">
              <ui-icon name="block-s"></ui-icon>
              Blocked
            </gh-settings-badge>
          `
        : html`
            <gh-settings-badge type="success">
              <ui-icon name="trust-s"></ui-icon>
              Trusted
            </gh-settings-badge>
          `}
    </template>
  `,
};

export { __vite_glob_0_11 as default };
