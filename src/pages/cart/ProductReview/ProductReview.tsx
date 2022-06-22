import { BillingReview } from '../BillingReview/BillingReview';
import { InfoReview } from '../InfoReview/InfoReview';
import {ReviewTemplate,PaymentReview} from './ProductReviewStyle';

export function ProductReview() {
  return (
    <ReviewTemplate>
      <div>
        <div>
          <InfoReview />
        </div>
      </div>
      <PaymentReview>
        <BillingReview />
      </PaymentReview>
    </ReviewTemplate>
  );
}
