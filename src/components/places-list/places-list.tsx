import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { useState } from 'react';

type PlacesListProps = {
  offers: Offers;
  getActiveCardId: (e: number) => void;
}

function PlacesList({offers, getActiveCardId}: PlacesListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);

  getActiveCardId(activeCardId);

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((e) => {
        const keyValue = e.id;
        return <PlaceCard key={keyValue} offer={e} onActiveCard={() => setActiveCardId(e.id)} onNoActiveCard={() => setActiveCardId(0)}/>;
      })}
    </div>
  );
}

export default PlacesList;
