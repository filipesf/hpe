/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const cardContentStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

export default function CardContentLeft({ children }: PropsWithChildren) {
  return <div css={cardContentStyles}>{children}</div>;
}
