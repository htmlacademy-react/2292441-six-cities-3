import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { MAIN_PLACES_LIST_CLASSES, RequestStatus } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectRequestStatus } from '../../store/selectors/offers';
import Spinner from '../spinner';

type PlacesListProps = {
  offers: Offers;
  sortingOption?: SortingOption;
  classNames: {
    listClass: string;
    itemClass: string;
  };
}

function PlacesList({offers, sortingOption, classNames}: PlacesListProps): JSX.Element {
  const status = useAppSelector(SelectRequestStatus);

  if (status === RequestStatus.Loading) {
    return (
      <Spinner />
    );
  }

  const {listClass, itemClass} = classNames;

  const getSortedOffers = () => {
    if (!sortingOption) {
      return offers;
    }
    switch (sortingOption) {
      case 'Popular':
        return offers;
      case 'Price: high to low':
        return offers.toSorted((a, b) => b.price - a.price);
      case 'Price: low to high':
        return offers.toSorted((a, b) => a.price - b.price);
      case 'Top rated first':
        return offers.toSorted((a, b) => b.rating - a.rating);
    }
  };

  const sortedOffers = getSortedOffers();

  return (
    <div className={`${listClass} places__list ${(listClass === MAIN_PLACES_LIST_CLASSES.listClass) ? 'tabs__content' : ''}`}>
      {sortedOffers.map((e) => {
        const keyValue = e.id;
        return (<PlaceCard key={keyValue} className={itemClass} offer={e} />);
      })}
    </div>
  );
}

export default PlacesList;
