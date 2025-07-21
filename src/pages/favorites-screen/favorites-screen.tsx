import FavoritesEmpty from '../../components/favorites-empty';
import FavoritesList from '../../components/favorites-list';
import Spinner from '../../components/spinner';
import { RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectFavorites, selectFavoritesRequestStatus } from '../../store/slices/favorites-data/selectors';

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector(selectFavorites);
  const status = useAppSelector(selectFavoritesRequestStatus);
  const isEmpty = status === RequestStatus.Success && !favorites.length;

  if (status === RequestStatus.Loading) {
    return <Spinner />;
  }

  return (
    <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
          {isEmpty ? <FavoritesEmpty /> :
            <>
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favorites={favorites} />
            </>}
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
