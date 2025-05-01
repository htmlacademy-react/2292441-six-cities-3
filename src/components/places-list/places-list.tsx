import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';

type PlaceListProps = {
  offers: Offers;
}

function PlaceList({offers}: PlaceListProps): JSX.Element {
  return (
    <>
      <PlaceCard offer={offers[0]} />
      <PlaceCard offer={offers[1]}/>
      <PlaceCard offer={offers[2]}/>
      <PlaceCard offer={offers[3]}/>
    </>
  );
}

export default PlaceList;
