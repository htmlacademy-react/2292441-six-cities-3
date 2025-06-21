import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offer';
import { APIRoute, DEFAULT_CITY } from '../const';
import { fillPlacesList } from './action';

export const fetchOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(fillPlacesList(DEFAULT_CITY));
    return data;
  }
);
