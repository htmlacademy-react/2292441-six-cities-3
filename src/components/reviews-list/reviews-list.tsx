import { Reviews } from '../../types/review';
import ReviewItem from '../review/review-item';

type ReviewsListProps = {
  reviews: Reviews;
};

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsList = reviews.slice(0, 10);

  return (
    <ul className="reviews__list">
      {
        reviewsList.map((review, i) => {
          const keyValue = `${i}-${review.comment}`;
          return (
            <ReviewItem key={keyValue} review={review}/>
          );
        })
      }
    </ul>
  );
}

export default ReviewsList;
