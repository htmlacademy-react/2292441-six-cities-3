import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
//import { useState, ChangeEvent } from 'react';

type PlaceListProps = {
  offers: Offers;
}

function PlaceList({offers}: PlaceListProps): JSX.Element {
  return (
    <>
      {offers.map((e) => {
        const keyValue = e.id;
        return <PlaceCard key={keyValue} offer={e} />;
      })}
    </>
  );
}

export default PlaceList;
