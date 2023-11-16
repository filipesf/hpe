/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardIconStyles = css`
  height: var(--space-m);
  width: var(--space-m);
`;

const cardIconPathStyles = css`
  fill: transparent;
  stroke: var(--color-gray-200);

  &:hover {
    fill: var(--color-gray-100);
  }
`;

const cardIconPathFilledStyles = css`
  fill: var(--color-gray-200);
`;

interface CardIconProps {
  isBookmarked: boolean;
}

export default function CardIcon({ isBookmarked }: CardIconProps) {
  const pathStyles = [
    cardIconPathStyles,
    isBookmarked && cardIconPathFilledStyles,
  ];

  return (
    <svg
      css={cardIconStyles}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        css={pathStyles}
        d="M16.0059 27.4912L16.0059 27.4912L16 27.4943L15.9941 27.4912C15.7517 27.3629 12.4454 25.561 9.21476 22.7318C5.93158 19.8565 3.00027 16.1574 3 12.2505C3.00217 10.4609 3.71408 8.7451 4.97959 7.47959C6.2451 6.21408 7.96087 5.50217 9.75055 5.5C12.0393 5.50016 13.9936 6.47945 15.2003 8.08668L16 9.15173L16.7997 8.08668C18.0064 6.47945 19.9607 5.50016 22.2495 5.5C24.0391 5.50217 25.7549 6.21408 27.0204 7.47959C28.2861 8.74523 28.998 10.4612 29 12.2511C28.9994 16.1578 26.0683 19.8566 22.7852 22.7318C19.5546 25.561 16.2483 27.3629 16.0059 27.4912Z"
        strokeWidth="2"
      />
    </svg>
  );
}
