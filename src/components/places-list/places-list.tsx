import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { useState } from 'react';

type PlacesListProps = {
  offers: Offers;
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  const [, setActiveCardId] = useState(0);
  return (
    <>
      {offers.map((e) => {
        const keyValue = e.id;
        return <PlaceCard key={keyValue} offer={e} onActiveCard={() => setActiveCardId(e.id)}/>;
      })}
    </>
  );
}

export default PlacesList;
