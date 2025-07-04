import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { MAIN_PLACES_LIST_CLASSES, NEAR_PLACES_LIST_CLASSES, RequestStatus } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectRequestStatus } from '../../store/selectors/request';
import Spinner from '../spinner';
import { useSortedOffers } from '../../hooks/use-sorted-offers';

type PlacesListProps = {
  offers: Offers;
  sortingOption?: SortingOption;
  isMainPage?: boolean;
}

function PlacesList({offers, sortingOption, isMainPage}: PlacesListProps): JSX.Element {
  const {listClass, itemClass} = isMainPage ? MAIN_PLACES_LIST_CLASSES : NEAR_PLACES_LIST_CLASSES;
  const status = useAppSelector(SelectRequestStatus);
  const sortedOffers = useSortedOffers(offers, sortingOption);

  if (status === RequestStatus.Loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={`${listClass} places__list ${(isMainPage) ? 'tabs__content' : ''}`}>
      {sortedOffers.map((e) => {
        const keyValue = e.id;
        return (<PlaceCard key={keyValue} className={itemClass} isMainPage={isMainPage} offer={e} />);
      })}
    </div>
  );
}

export default PlacesList;
