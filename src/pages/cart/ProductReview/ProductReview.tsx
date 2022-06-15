import { BillingReview } from '../BillingReview/BillingReview';
import { ImageProductReview } from '../ImageProductReview/ImageProductReview';
import { InfoReview } from '../InfoReview/InfoReview';
import style from './ProductReview.module.scss';

export function ProductReview() {
  return (

    <section className={`${style.review}`}>


      <div className={style.infoReview}>
        <div>
          <InfoReview />
        </div>
      </div>
      <div className={style.paymentReview}>
        <BillingReview />
      </div>

    </section>

  );
}