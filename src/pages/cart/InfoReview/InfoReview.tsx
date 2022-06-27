import { CartContext } from 'contexts/CartContext';
import { StorageContext } from 'contexts/StorageContext';
import { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import style from './InfoReview.module.scss';
import {
  InfoReviewContent,
  InfoReviewTemplate,
  InfoReviewTitle,
} from './InfoReviewStyle';
import { ReviewItem } from './ReviewItem/ReviewItem';
import { ReviewTitle } from './ReviewTitle/ReviewTitle';

export function InfoReview() {
  const {cart, setCart} = useContext(StorageContext);

  return (
    <InfoReviewTemplate>
      <>
        <InfoReviewTitle>
          <ReviewTitle />
        </InfoReviewTitle>
        {cart.map((product, productCartindex) => {
          return (
            <InfoReviewContent key={product.id}>
              <ReviewItem
                //melhorar esse codigo

                item={cart.find(
                  (_, indice) => indice === productCartindex
                )} 
                productsInCart = {cart}
              />
            </InfoReviewContent>
          );
        })}
      </>
    </InfoReviewTemplate>
  );
}
