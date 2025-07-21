import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer, Offers } from '../types/offer';
import { APIRoute, AppRoute, DEFAULT_CITY, ErrorType } from '../const';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { FullOffer } from '../types/full-offer';
import { Review, Reviews } from '../types/review';
import { PostCommentProps } from '../types/post-comment-props';
import { setCity } from './slices/main-process/main-process';
import { ChangeFavoriteStatus } from '../types/change-favorite-flag';
import { FavoriteOffer } from '../types/favorite-offer';
import { ServerError } from '../types/server-error';
import { DetailedError } from '../types/detailed-error';
import { getErrorData } from './util/get-error-data';
import { addError } from './slices/errors-data/errors-data';
import { applyFavorites, resetOffers } from './slices/offers-data/offers-data';
import { resetNearbyOffers } from './slices/nearby-data/nearby-data';
import { resetOffer } from './slices/offer-data/offer-data';

export const fetchOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Offers);
      dispatch(setCity(DEFAULT_CITY));
      return data;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Offers);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const fetchFavorites = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Favorites);
      const ids = data.map((offer) => offer.id);
      dispatch(applyFavorites(ids));
      return data;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Favorites);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const login = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: DetailedError | ServerError;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      const {token} = data;
      saveToken(token);
      dispatch(fetchFavorites());
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Auth);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api, rejectWithValue}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(resetOffers());
      dispatch(resetOffer());
      dispatch(resetNearbyOffers());
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Auth);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const fetchOffer = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Offer);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const fetchReviews = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'offer/fetchComments',
  async (id, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
      return data;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Review);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'offer/fetchNearbyOffers',
  async (id, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
      const offers = data.slice(0, 3);
      return offers;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Nearby);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);

export const postReview = createAsyncThunk<Review, PostCommentProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: DetailedError | ServerError;
}>(
  'offer/postComment',
  async ({body, offerId}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, body);
      return data;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Review);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);


export const checkAuth = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavorites());
    return data;
  }
);

export const changeFavoriteStatus = createAsyncThunk<Offer, ChangeFavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ServerError;
}>(
  'favorites/changeFlag',
  async ({id, status}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<FavoriteOffer>(`${APIRoute.Favorites}/${id}/${status}`, status);
      const offer: Offer = {
        id: data.id,
        city: data.city,
        previewImage: data.previewImage,
        title: data.title,
        rating: data.rating,
        type: data.type,
        price: data.price,
        isPremium: data.isPremium,
        isFavorite: data.isFavorite,
        location: data.location,
      };
      return offer;
    } catch (error: unknown) {
      const errorData = getErrorData(error, ErrorType.Favorites);
      dispatch(addError(errorData));

      return rejectWithValue(errorData);
    }
  }
);
