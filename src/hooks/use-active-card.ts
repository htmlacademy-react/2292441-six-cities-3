import { useAppDispatch } from './use-app-dispatch';
import { setActiveOfferId } from '../store/action';
import { Offer } from '../types/offer';


export const useActiveCard = (offerId: Offer['id']) => {
  const dispatch = useAppDispatch();

  const activeCardHandler = () => {
    dispatch(setActiveOfferId(offerId));
  };

  const noActiveCardHandler = () => {
    dispatch(setActiveOfferId(''));
  };

  return {activeCardHandler, noActiveCardHandler};
};
