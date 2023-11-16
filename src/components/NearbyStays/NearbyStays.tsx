/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { cardContainerStyles } from 'shared/styles';

const nearbyStaysStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`;

const nearbyStaysTitleStyles = css`
  margin: 0;
  font-size: var(--font-size-m);
  color: var(--color-gray-200);
`;

export function NearbyStays({ children }: PropsWithChildren) {
  return (
    <section css={nearbyStaysStyles}>
      <h3 css={nearbyStaysTitleStyles}>Nearby Stays</h3>

      <div css={cardContainerStyles}>{children}</div>
    </section>
  );
}

export default NearbyStays;
