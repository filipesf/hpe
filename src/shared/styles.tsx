import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
    --font-family: 'Open Sans', sans-serif;

    --border-radius-s: 4px;
    --border-radius-m: 8px;
    --border-radius-l: 12px;

    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    --card-border-radius: var(--border-radius-m);
    --card-tag-border: 1px solid;

    --ruler-border: 1px solid #e9e9e9;

    --space-xxs: 4px;
    --space-xs: 8px;
    --space-s: 12px;
    --space-m: 16px;
    --space-l: 24px;
    --space-xl: 32px;
    --space-xxl: 48px;

    --font-size-xs: 0.75rem;
    --font-size-s: 0.875rem;
    --font-size-m: 1rem;
    --font-size-l: 1.125rem;
    --font-size-xl: 1.25rem;

    --color-white: #ffffff;
    --color-gray-50: #f8f8f8;
    --color-gray-100: #6f6f6f;
    --color-gray-200: #444444;
    --color-gray-300: #0000001f;

    --color-blue-50: #e3f4fd;
    --color-blue-100: #64c0f3;
    --color-blue-200: #0d7ab5;
    --color-blue-300: #095680;

    --color-purple-50: #f2eeff;
    --color-purple-100: #bba4fb;
    --color-purple-200: #bba4fb30;

    --color-brand: var(--color-blue-200);

    --focus-ring: 2px solid var(--color-blue-200);
  }

  body {
    all: unset;
    -webkit-font-smoothing: antialiased;
  }
`;

export const cardContainerStyles = css`
  display: grid;
  gap: var(--space-xl);
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;
