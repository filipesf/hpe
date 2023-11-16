/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const cardContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-m);
`;

export default function CardContainer({ children }: PropsWithChildren) {
  return <div css={cardContainerStyles}>{children}</div>;
}
