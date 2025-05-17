import { Reviews } from '../../types/offer';
import ReviewItem from '../review/review-item';

type ReviewsListProps = {
  reviews: Reviews;
};

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((e, i) => {
          const keyValue = `${i}-${e.comment}`;
          return (
            <ReviewItem key={keyValue} review={e}/>
          );
        })
      }
    </ul>
  );
}

export default ReviewsList;
