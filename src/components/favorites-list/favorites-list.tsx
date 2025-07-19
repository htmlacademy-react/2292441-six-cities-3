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
      {sortedFavorites.map((list, i) => {
        const keyValue = i;
        return (
          (!list.length) ? null :
            <FavoritesLocation key={keyValue} city={list[0].city}>
              <PlacesList offers={list} element='favorites__places'/>
            </FavoritesLocation>);
      })}
    </ul>
  );
}

export default FavoritesList;
