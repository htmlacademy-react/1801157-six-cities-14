import { TReview } from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';

type TReviewsListProps = {
  reviews: TReview[];
}

export default function ReviewsList({reviews}: TReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          reviewsItem={review}
        />
      ))}
    </ul>
  );
}
