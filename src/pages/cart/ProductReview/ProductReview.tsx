import { CartContext } from 'contexts/CartContext';
import { StorageContext } from 'contexts/StorageContext';
import { useContext } from 'react';
import { BillingReview } from '../BillingReview/BillingReview';
import { InfoReview } from '../InfoReview/InfoReview';
import { ReviewTemplate, PaymentReview } from './ProductReviewStyle';

export function ProductReview() {
  const { cart, setCart } = useContext(StorageContext);
  return (
    <ReviewTemplate>
      <InfoReview />
      <PaymentReview>
        <BillingReview cart={cart} setCart={setCart} />
      </PaymentReview>
    </ReviewTemplate>
  );
}
