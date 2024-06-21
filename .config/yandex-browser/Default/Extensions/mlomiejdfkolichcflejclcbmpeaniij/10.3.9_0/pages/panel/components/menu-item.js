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


const __vite_glob_0_7 = {
  icon: '',
  render: ({ icon }) => html`
    <template layout="grid:max|1|max items:center:start gap:2">
      <ui-icon name="${icon}" layout="size:3"></ui-icon>
      <ui-text type="label-m" ellipsis layout="column width::0:full">
        <slot></slot>
      </ui-text>
      <ui-icon name="arrow-right"></ui-icon>
    </template>
  `.css`
    :host {
      text-decoration: none;
      color: var(--ui-color-gray-900);
      --ui-text-color-heading: currentColor;
    }

    ui-icon {
      color: var(--ui-color-gray-600);
    }

    ui-text ::slotted(*) {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    @media (hover: hover) and (pointer: fine) {
      :host(:hover) {
        color: var(--ui-color-primary-700);
      }

      :host(:hover) ui-icon {
        color: var(--ui-color-primary-700);
      }
    }
  `,
};

export { __vite_glob_0_7 as default };
