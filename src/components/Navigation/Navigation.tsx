/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Profile } from 'components/Profile';

const navStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const brandStyles = css`
  margin: 0;
  font-size: var(--font-size-m);
  font-weight: 600;
  line-height: 1;
  color: var(--color-brand);
  fill: var(--color-brand);
`;

export function Navigation() {
  return (
    <nav css={navStyles}>
      <h1 css={brandStyles}>Acme Homes</h1>

      <Profile name="Filipe Fernandes" email="filipe.fernandes@me.com" />
    </nav>
  );
}

export default Navigation;
