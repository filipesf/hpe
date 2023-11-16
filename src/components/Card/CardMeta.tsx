/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardMetaStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
`;

interface CardMetaProps {
  bedrooms: number;
  bathrooms: number;
  startDate: string;
  endDate: string;
}

export default function CardMeta({
  bedrooms,
  bathrooms,
  startDate,
  endDate,
}: CardMetaProps) {
  return (
    <p css={cardMetaStyles}>
      <span>
        {bedrooms} bedroom, {bathrooms} bathroom
      </span>
      <span>
        {startDate} - {endDate}
      </span>
    </p>
  );
}
