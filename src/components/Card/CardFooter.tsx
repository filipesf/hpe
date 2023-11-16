/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardFooterStyles = css`
  display: flex;
  justify-content: space-between;
  padding-top: var(--space-s);
  border-top: var(--ruler-border);
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
`;

interface CardFooterProps {
  total: string;
}

export default function CardFooter({ total }: CardFooterProps) {
  return (
    <div css={cardFooterStyles}>
      <span>Total</span>
      <span>{total}</span>
    </div>
  );
}
