import ReviewItem from '../reviewItem/ReviewItem';
import {Review} from '../../types/reviews';
import {maxReviewItems} from '../../utils/const';

type ReviewList = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewList) {
  const limitedReviews = reviews.slice(0, maxReviewItems);

  const sortedReviews = [...limitedReviews].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <ReviewItem review={review} key={review.id}/>
        ))}
      </ul>
    </>
  );

}

export default ReviewList;
