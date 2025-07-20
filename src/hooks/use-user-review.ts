import { useState, FormEvent, ChangeEvent, useEffect, useRef } from 'react';
import { useAppDispatch } from './use-app-dispatch';
import { postReview } from '../store/api-action';
import { FullOffer } from '../types/full-offer';
import { useAppSelector } from './use-app-selector';
import { SelectOffer } from '../store/slices/offer-data/selectors';
import { SelectReviewsPostStatus } from '../store/slices/reviews-data/selectors';
import { RequestStatus } from '../const';

export const useUserReview = () => {
  const offer = useAppSelector(SelectOffer) as FullOffer;
  const postStatus = useAppSelector(SelectReviewsPostStatus);
  const prevPostStatus = useRef(postStatus);
  const dispatch = useAppDispatch();

  const isLoading = postStatus === RequestStatus.Loading;
  const isPosted = prevPostStatus.current !== RequestStatus.Success && postStatus === RequestStatus.Success;


  const [review, setReview] = useState(
    {
      stars: 0,
      comment: ''
    }
  );

  useEffect(() => {
    if (isPosted) {
      setReview({stars: 0, comment: ''});
    }

    prevPostStatus.current = postStatus;
  }, [isPosted, postStatus]);

  const handleRadioChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setReview({...review, stars: Number(target.value)});
  };

  const handleFieldChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({...review, comment: target.value});
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(postReview({
      body: {
        comment: review.comment,
        rating: review.stars,
      },
      offerId: offer.id,
    }));
  };


  return {review, handleRadioChange, handleFieldChange, handleFormSubmit, isLoading};
};
