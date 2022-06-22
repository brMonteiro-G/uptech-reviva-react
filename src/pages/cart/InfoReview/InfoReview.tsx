
import { cartState } from 'pages/state/atoms/cartState';
import { useRecoilValue } from 'recoil';
import { ImageProductReview } from '../ImageProductReview/ImageProductReview';
import style from './InfoReview.module.scss';
import { ReviewItem } from './ReviewItem/ReviewItem';
import { ReviewTitle } from './ReviewTitle/ReviewTitle';

export function InfoReview() {

  const getItem = useRecoilValue(cartState);

  const productsInCart = [...getItem];


  //console.log(productsOnCart)
  return (
    <div className={`${style.review__info}`}>

      <>
        <div className={style['review__info--title']} >
          <ReviewTitle />

        </div>
        {
          productsInCart.map((product, productCartindex) => {
            return (
              <div key={product.id} className={style['review__info--item']}>

                <ReviewItem
                  //melhorar esse codigo 

                  item={productsInCart.find((_, indice) => indice === productCartindex)}
                />
              </div>

            );
          })
        }
      </>
    </div>
  );
}