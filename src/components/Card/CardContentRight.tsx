/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const cardContentRightStyles = css`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-xs);
`;

export default function CardContentRight({ children }: PropsWithChildren) {
  return <div css={cardContentRightStyles}>{children}</div>;
}
