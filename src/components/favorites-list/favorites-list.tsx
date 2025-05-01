import FavoriteCard from '../favorite-card/favorite-card';
import { Offers } from '../../types/offer';

type FavoritesListProps = {
  offers: Offers;
};

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  return (
    <>
      {offers.map((e) => {
        const keyValue = e.id;
        return <FavoriteCard key={keyValue} offer={e}/>;
      })}
    </>
  );
}

export default FavoritesList;
