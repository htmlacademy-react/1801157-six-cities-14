import { TReview } from '../../types/review';
import cn from 'classnames';

type TReviewsItemProps = {
  reviewsItem: TReview;
}

export default function ReviewsItem({reviewsItem}: TReviewsItemProps) {
  const {
    comment,
    date,
    rating,
    user,
  } = reviewsItem;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className={cn('reviews__avatar-wrapper', 'user__avatar-wrapper', {
          'reviews__avatar-wrapper--pro': user.isPro,
        })}
        >
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(100 / 5) * Math.round(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}
