import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainProcess } from '../../../types/state';
import { CITIES, NameSpace } from '../../../const';
import { City } from '../../../types/city';
import { Offer } from '../../../types/offer';

const initialState: MainProcess = {
  city: CITIES[0],
  activeCard: '',
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setActiveCard: (state, action: PayloadAction<Offer['id']>) => {
      state.activeCard = action.payload;
    },
  },
});

export const {setCity, setActiveCard} = mainProcess.actions;
