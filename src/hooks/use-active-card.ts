import { useAppDispatch } from './use-app-dispatch';
import { Offer } from '../types/offer';
import { setActiveCard } from '../store/slices/main-process/main-process';


export const useActiveCard = (offerId: Offer['id']) => {
  const dispatch = useAppDispatch();

  const handleCardMouseOver = () => {
    dispatch(setActiveCard(offerId));
  };

  const handleCardMouseOut = () => {
    dispatch(setActiveCard(''));
  };

  return {handleCardMouseOver, handleCardMouseOut};
};
