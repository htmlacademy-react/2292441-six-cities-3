import { Offers } from '../../types/offer';
import FavoritesList from '../../components/favorites-list';

type FavoritesScreenProps = {
  offers: Offers;
};

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesList offers={offers} />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
