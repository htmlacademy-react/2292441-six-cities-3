import { AMSTERDAM, BRUSSELS, COLOGNE, DUSSELDORF, HAMBURG, PARIS } from '../const';
import { AMSTERDAM_MARKS_COORDS, BRUSSELS_MARKS_COORDS, COLOGNE_MARKS_COORDS, DUSSELDORF_MARKS_COORDS, HAMBURG_MARKS_COORDS, IDS, OFFERS_AMOUNT, PARIS_MARKS_COORDS } from './const';
import { getOffersArray } from './util';

export const parisOffers = getOffersArray(PARIS, IDS.slice(0, 4), PARIS_MARKS_COORDS, OFFERS_AMOUNT);
export const cologneOffers = getOffersArray(COLOGNE, IDS.slice(4, 8), COLOGNE_MARKS_COORDS, OFFERS_AMOUNT);
export const brusselsOffers = getOffersArray(BRUSSELS, IDS.slice(8, 12), BRUSSELS_MARKS_COORDS, OFFERS_AMOUNT);
export const amsterdamOffers = getOffersArray(AMSTERDAM, IDS.slice(12, 16), AMSTERDAM_MARKS_COORDS, OFFERS_AMOUNT);
export const hamburgOffers = getOffersArray(HAMBURG, IDS.slice(16, 20), HAMBURG_MARKS_COORDS, OFFERS_AMOUNT);
export const dusseldorfOffers = getOffersArray(DUSSELDORF, IDS.slice(20), DUSSELDORF_MARKS_COORDS, OFFERS_AMOUNT);
