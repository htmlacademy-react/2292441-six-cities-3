import { offers } from '../mocks/offers';
import { CityName } from '../types/city';

export const findOffers = (city: CityName) => offers.filter((e) => e.city.name === city);
