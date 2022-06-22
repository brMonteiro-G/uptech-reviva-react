import { useRecoilValue } from 'recoil';
import { cartState } from 'state/atoms/dynamic/cartState';
import style from './InfoReview.module.scss';
import {
  InfoReviewContent,
  InfoReviewTemplate,
  InfoReviewTitle,
} from './InfoReviewStyle';
import { ReviewItem } from './ReviewItem/ReviewItem';
import { ReviewTitle } from './ReviewTitle/ReviewTitle';

export function InfoReview() {
  const getItem = useRecoilValue(cartState);

  const productsInCart = [...getItem];

  //console.log(productsOnCart)
  return (
    <InfoReviewTemplate>
      <>
        <InfoReviewTitle>
          <ReviewTitle />
        </InfoReviewTitle>
        {productsInCart.map((product, productCartindex) => {
          return (
            <InfoReviewContent key={product.id}>
              <ReviewItem
                //melhorar esse codigo

                item={productsInCart.find(
                  (_, indice) => indice === productCartindex
                )}
              />
            </InfoReviewContent>
          );
        })}
      </>
    </InfoReviewTemplate>
  );
}
