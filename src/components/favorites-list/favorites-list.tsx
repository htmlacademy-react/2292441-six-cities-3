import { useSortedFavorites } from '../../hooks/use-sorted-favorites';
import { Offers } from '../../types/offer';
import FavoritesLocation from '../favorites-location';
import PlacesList from '../places-list/places-list';

type FavoritesListProps = {
  favorites: Offers;
};

function FavoritesList({favorites}: FavoritesListProps): JSX.Element {
  const sortedFavorites = useSortedFavorites(favorites);

  return (
    <ul className="favorites__list">
      {sortedFavorites.map((e, i) => {
        const keyValue = i;
        return (
          (!e.length) ? null :
            <FavoritesLocation key={keyValue} city={e[0].city}>
              <PlacesList offers={e} />
            </FavoritesLocation>);
      })}
    </ul>
  );
}

export default FavoritesList;
