/* eslint-disable react-refresh/only-export-components */
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { RequestStatus } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectOffersRequestStatus } from '../../store/slices/offers-data/selectors';
import Spinner from '../spinner';
import { useSortedOffers } from '../../hooks/use-sorted-offers';
import { memo } from 'react';

type PlacesListProps = {
  offers: Offers;
  sortingOption?: SortingOption;
  element: string;
}

function PlacesList({offers, sortingOption, element}: PlacesListProps): JSX.Element {
  const status = useAppSelector(SelectOffersRequestStatus);
  const sortedOffers = useSortedOffers(offers, sortingOption);
  const isFavorites = element === 'favorites__places';
  const className = isFavorites ? element : `${element} places__list ${element === 'cities__places-list' ? 'tabs__content' : ''}`;

  if (status === RequestStatus.Loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={className}>
      {sortedOffers.map((offer) => {
        const keyValue = offer.id;
        return (<PlaceCard key={keyValue} parent={element} offer={offer} />);
      })}
    </div>
  );
}

export default memo(PlacesList);
