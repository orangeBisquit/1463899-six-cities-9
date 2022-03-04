import ReviewItem from '../reviewItem/ReviewItem';
import {Review} from '../../types/reviews';

type ReviewList = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewList) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id}/>
        ))}
      </ul>
    </>
  );

}

export default ReviewList;
