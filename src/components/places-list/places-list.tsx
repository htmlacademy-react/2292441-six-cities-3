import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { RequestStatus } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectRequestStatus } from '../../store/selectors/request';
import Spinner from '../spinner';
import { useSortedOffers } from '../../hooks/use-sorted-offers';

type PlacesListProps = {
  offers: Offers;
  sortingOption?: SortingOption;
  classNames: {
    listClass: string;
    itemClass: string;
  };
  isMainPage?: boolean;
}

function PlacesList({offers, sortingOption, classNames, isMainPage}: PlacesListProps): JSX.Element {
  const {listClass, itemClass} = classNames;
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
