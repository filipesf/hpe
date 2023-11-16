/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardTagStyles = css`
  padding: var(--space-xxs) var(--space-xs);
  border: var(--card-tag-border);
  border-radius: var(--border-radius-s);
  font-size: var(--font-size-xs);
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-gray-200);
`;

const cardTagBlueStyles = css`
  background-color: var(--color-blue-50);
  border-color: var(--color-blue-100);
`;

const cardTagPurpleStyles = css`
  background-color: var(--color-purple-50);
  border-color: var(--color-purple-100);
`;

interface CardTagProps {
  isUsuallyBooked: boolean;
  hasLowRates: boolean;
}

export default function CardTag({
  isUsuallyBooked = false,
  hasLowRates = false,
}: CardTagProps) {
  const styles = [
    cardTagStyles,
    (hasLowRates && cardTagPurpleStyles) ||
    (isUsuallyBooked && cardTagBlueStyles),
  ];

  const label = hasLowRates
    ? 'Low Rates'
    : isUsuallyBooked
      ? 'Usually Booked'
      : '';

  return <span css={styles}>{label}</span>;
}
