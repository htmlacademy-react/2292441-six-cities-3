import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance, isAxiosError } from 'axios';
import { Offer, Offers } from '../types/offer';
import { APIRoute, AppRoute, DEFAULT_CITY } from '../const';
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

export const fetchOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(setCity(DEFAULT_CITY));
    return data;
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
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data as DetailedError);
      }
      return rejectWithValue({
        errorType: 'UNKNOWN_ERROR',
        message: 'Something went wrong.'
      });
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchOffer = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchNearbyOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const postReview = createAsyncThunk<Review, PostCommentProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async ({body, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, body);
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    return data;
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
}>(
  'favorites/changeFlag',
  async ({id, status}, {extra: api}) => {
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
  }
);
