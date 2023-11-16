/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes, ElementType } from 'react';

const cardButtonIconStyles = css`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-s);

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: var(--focus-ring);
  }
`;

interface CardActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  isBookmarked: boolean;
}

export default function CardAction({
  icon: Icon,
  isBookmarked = false,
  ...restProps
}: CardActionProps) {
  return (
    <button css={cardButtonIconStyles} {...restProps}>
      <Icon isBookmarked={isBookmarked} />
    </button>
  );
}
