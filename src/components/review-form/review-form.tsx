/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';
import { useUserReview } from '../../hooks/use-user-review.ts';
import { ReviewLength } from '../../const.ts';

function ReviewForm(): JSX.Element {
  const {review, handleRadioChange, handleFieldChange, handleFormSubmit, isLoading} = useUserReview();
  const commentLength = review.comment.length as ReviewLength;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" checked={review.stars === 5} name="rating" value="5" id="5-stars" type="radio" onChange={handleRadioChange} disabled={isLoading}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" checked={review.stars === 4} name="rating" value="4" id="4-stars" type="radio" onChange={handleRadioChange} disabled={isLoading}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" checked={review.stars === 3} name="rating" value="3" id="3-stars" type="radio" onChange={handleRadioChange} disabled={isLoading}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" checked={review.stars === 2} name="rating" value="2" id="2-stars" type="radio" onChange={handleRadioChange} disabled={isLoading}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" checked={review.stars === 1} name="rating" value="1" id="1-star" type="radio" onChange={handleRadioChange} disabled={isLoading}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" value={review.comment} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange} disabled={isLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            isLoading ||
            !review.stars ||
            commentLength < ReviewLength.min ||
            commentLength > ReviewLength.max
          }
        >
            Submit
        </button>
      </div>
    </form>
  );
}

export default memo(ReviewForm);
