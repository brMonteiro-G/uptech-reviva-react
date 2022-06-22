import { BillingReview } from '../BillingReview/BillingReview';
import { InfoReview } from '../InfoReview/InfoReview';
import { ReviewTemplate, PaymentReview } from './ProductReviewStyle';

export function ProductReview() {
  return (
    <ReviewTemplate>
      <InfoReview />
      <PaymentReview>
        <BillingReview />
      </PaymentReview>
    </ReviewTemplate>
  );
}
