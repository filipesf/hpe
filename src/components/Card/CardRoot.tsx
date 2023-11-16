/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const cardRootStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-l);
  padding: var(--space-m);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
`;

export default function CardRoot({ children }: PropsWithChildren) {
  return <section css={cardRootStyles}>{children}</section>;
}
