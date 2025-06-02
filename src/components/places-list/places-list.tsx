import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { MAIN_PLACES_LIST_CLASSES } from '../../const';
import { SortingOption } from '../../types/sorting-option';

type PlacesListProps = {
  offers: Offers;
  getActiveCardId?: (e: string) => void;
  sortingOption?: SortingOption;
  classNames: {
    listClass: string;
    itemClass: string;
  };
}

function PlacesList({offers, getActiveCardId, sortingOption, classNames}: PlacesListProps): JSX.Element {
  const {listClass, itemClass} = classNames;

  const activeCardHandler = (id: string) => {
    if (getActiveCardId) {
      return () => getActiveCardId(id);
    }
  };

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
        return (listClass === MAIN_PLACES_LIST_CLASSES.listClass && getActiveCardId)
          ? (<PlaceCard key={keyValue} className={itemClass} offer={e} onActiveCard={activeCardHandler(e.id)} onNoActiveCard={activeCardHandler('')} />)
          : (<PlaceCard key={keyValue} className={itemClass} offer={e} />);
      })}
    </div>
  );
}

export default PlacesList;
