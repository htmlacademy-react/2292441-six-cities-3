import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { MAIN_PLACES_LIST_CLASSES } from '../../const';

type PlacesListProps = {
  offers: Offers;
  getActiveCardId?: (e: number) => void;
  classNames: {
    listClass: string;
    itemClass: string;
  };
}

function PlacesList({offers, getActiveCardId, classNames}: PlacesListProps): JSX.Element {
  const {listClass, itemClass} = classNames;

  const activeCardHandler = (id: number) => {
    if (getActiveCardId) {
      return () => getActiveCardId(id);
    }
  };

  return (
    <div className={`${listClass} places__list ${(listClass === MAIN_PLACES_LIST_CLASSES.listClass) ? 'tabs__content' : ''}`}>
      {offers.map((e) => {
        const keyValue = e.id;
        return (listClass === MAIN_PLACES_LIST_CLASSES.listClass && getActiveCardId)
          ? (<PlaceCard key={keyValue} className={itemClass} offer={e} onActiveCard={activeCardHandler(e.id)} onNoActiveCard={activeCardHandler(0)} />)
          : (<PlaceCard key={keyValue} className={itemClass} offer={e} />);
      })}
    </div>
  );
}

export default PlacesList;
