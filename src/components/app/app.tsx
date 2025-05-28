import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import MainScreen from '../../pages/main-screen';
import LoginScreen from '../../pages/login-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import OfferScreen from '../../pages/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen';
import { Offers } from '../../types/offer';

type AppScreenProps = {
  offers: Offers;
};

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<MainScreen offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesScreen offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen offers={offers}/>}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
