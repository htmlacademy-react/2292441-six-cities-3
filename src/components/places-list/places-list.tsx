import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';

type PlacesListProps = {
  offers: Offers;
  getActiveCardId: (e: number) => void;
}

function PlacesList({offers, getActiveCardId}: PlacesListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((e) => {
        const keyValue = e.id;
        return <PlaceCard key={keyValue} offer={e} onActiveCard={() => getActiveCardId(e.id)} onNoActiveCard={() => getActiveCardId(0)}/>;
      })}
    </div>
  );
}

export default PlacesList;
