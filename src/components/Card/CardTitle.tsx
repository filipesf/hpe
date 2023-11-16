/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const cardTitleStyles = css`
  margin: 0;
  font-size: var(--font-size-s);
  color: var(--color-gray-200);
`;

export default function CardTitle({ children }: PropsWithChildren) {
  return <h4 css={cardTitleStyles}>{children}</h4>;
}
