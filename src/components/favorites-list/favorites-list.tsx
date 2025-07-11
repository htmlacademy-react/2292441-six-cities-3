import { Offers } from '../../types/offer';
import PlaceCard from '../place-card';

type FavoritesListProps = {
  offers: Offers;
};

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  return (
    <>
      {offers.map((e) => {
        const keyValue = e.id;
        return <PlaceCard key={keyValue} offer={e} className='favorites__card'/>;
      })}
    </>
  );
}

export default FavoritesList;
