/* eslint-disable react-refresh/only-export-components */
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { ErrorType, RequestStatus } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectOffersRequestStatus } from '../../store/slices/offers-data/selectors';
import Spinner from '../spinner';
import { useSortedOffers } from '../../hooks/use-sorted-offers';
import { memo } from 'react';
import { SelectFavoritesError } from '../../store/slices/favorites-data/selectors';
import ErrorPopup from '../error-popup';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { resetFavoriteError } from '../../store/slices/favorites-data/favorites-data';

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
  const error = useAppSelector(SelectFavoritesError);
  const dispatch = useAppDispatch();

  if (status === RequestStatus.Loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={className}>
      {error ? <ErrorPopup type={ErrorType.Favorites} error={error} onClose={() => dispatch(resetFavoriteError())} /> : null}
      {sortedOffers.map((e) => {
        const keyValue = e.id;
        return (<PlaceCard key={keyValue} parent={element} offer={e} />);
      })}
    </div>
  );
}

export default memo(PlacesList);
