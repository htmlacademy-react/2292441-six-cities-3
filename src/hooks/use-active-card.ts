import { useAppDispatch } from './use-app-dispatch';
import { Offer } from '../types/offer';
import { setActiveCard } from '../store/slices/main-process/main-process';


export const useActiveCard = (offerId: Offer['id']) => {
  const dispatch = useAppDispatch();

  const activeCardHandler = () => {
    dispatch(setActiveCard(offerId));
  };

  const noActiveCardHandler = () => {
    dispatch(setActiveCard(''));
  };

  return {activeCardHandler, noActiveCardHandler};
};
