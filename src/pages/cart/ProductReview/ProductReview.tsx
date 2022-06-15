import { BillingReview } from '../BillingReview/BillingReview';
import { ImageProductReview } from '../ImageProductReview/ImageProductReview';
import { InfoReview } from '../InfoReview/InfoReview';
import style from './ProductReview.module.scss';

export function ProductReview() {
  return (

    <section className={`${style.review}`}>
      <div>
        <ImageProductReview />
      </div>

      <div className={style.infoReview}>
        <InfoReview />
      </div>
      <div className={style.paymentReview}>
        <BillingReview />
      </div>

    </section>

  );
}