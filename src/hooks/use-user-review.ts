import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch } from './use-app-dispatch';
import { postReview } from '../store/api-action';
import { FullOffer } from '../types/full-offer';

export const useUserReview = (offerId: FullOffer['id']) => {
  const dispatch = useAppDispatch();

  const [review, setReview] = useState(
    {
      stars: 0,
      comment: ''
    }
  );


  const handleRadioChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setReview({...review, stars: Number(target.value)});
  };

  const handleFieldChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({...review, comment: target.value});
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(postReview({
      body: {
        comment: review.comment,
        rating: review.stars,
      },
      offerId: offerId,
    }));
  };


  return {review, handleRadioChange, handleFieldChange, submitHandler};
};
