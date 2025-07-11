import FavoritesList from '../../components/favorites-list';
import { useFavorites } from '../../hooks/use-favorites';

function FavoritesScreen(): JSX.Element {
  const favorites = useFavorites();

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesList offers={favorites}/>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
