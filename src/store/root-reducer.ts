import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { authProcess } from './slices/auth-process/auth-process';
import { mainProcess } from './slices/main-process/main-process';
import { offersData } from './slices/offers-data/offers-data';
import { offerData } from './slices/offer-data/offer-data';
import { reviewsData } from './slices/reviews-data/reviews-data';
import { nearbyData } from './slices/nearby-data/nearby-data';
import { favoritesData } from './slices/favorites-data/favorites-data';
import { errorsData } from './slices/errors-data/errors-data';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authProcess.reducer,
  [NameSpace.Main]: mainProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.Nearby]: nearbyData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.Errors]: errorsData.reducer,
});
