/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { Navigation } from 'components/Navigation';
import { Card } from 'components/Card';
import { useAppContext } from 'utils/context';
import useFetch from 'hooks/useFetch';
import { NearbyStays } from 'components/NearbyStays';

const appContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  max-width: 1024px;
  padding: var(--space-l);
  margin: 0 auto;
  font-family: var(--font-family);
`;

export const App = () => {
  const { homes, setHomes, bookmarkedItems, setBookmarkedItems } =
    useAppContext();

  const URL =
    'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=9&refine=country%3AIreland';

  const fetchData = useFetch(URL);

  useEffect(() => {
    const { isLoading, data } = fetchData;
    !isLoading && setHomes(data.results);
  }, [fetchData, setHomes]);

  const isItemBookmarked = (itemId: string) =>
    !!bookmarkedItems.includes(itemId);

  const handleBookmarking = (currentId: string) => {
    const updatedBookmarkedItems = isItemBookmarked(currentId)
      ? bookmarkedItems.filter((item) => item !== currentId)
      : [...bookmarkedItems, currentId];

    setBookmarkedItems(updatedBookmarkedItems);
  };

  return (
    <div css={appContainerStyles}>
      <Navigation />

      <NearbyStays>
        {homes.map((home) => {
          const { id, street, number_of_reviews, bedrooms, bathrooms, price } =
            home;
          const isBookmarked = isItemBookmarked(id);
          const hasLowRates = price < 75;
          const isUsuallyBooked = number_of_reviews > 10;
          const shouldDisplayTag = hasLowRates || isUsuallyBooked;

          return (
            <Card.Root key={id}>
              <Card.Container>
                <Card.ContentLeft>
                  <Card.Title>{street}</Card.Title>
                  <Card.Meta
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    startDate="Nov 17"
                    endDate="Nov 19"
                  />
                </Card.ContentLeft>

                <Card.ContentRight>
                  {shouldDisplayTag && (
                    <Card.Tag
                      isUsuallyBooked={isUsuallyBooked}
                      hasLowRates={hasLowRates}
                    />
                  )}
                  <Card.Action
                    icon={Card.Icon}
                    isBookmarked={isBookmarked}
                    onClick={() => handleBookmarking(id)}
                  />
                </Card.ContentRight>
              </Card.Container>

              <Card.Footer total={`$${price * 2}`} />
            </Card.Root>
          );
        })}
      </NearbyStays>
    </div>
  );
};

export default App;
