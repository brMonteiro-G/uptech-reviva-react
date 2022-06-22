
import { cartState } from 'pages/state/atoms/dynamic/cartState';
import { useRecoilValue } from 'recoil';
import { ImageProductTemplate,ImageProduct } from './ImageProductReviewStyle';

export function ImageProductReview() {

  const getImages = useRecoilValue(cartState);
  const images = [...getImages];

  return (
    <ImageProductTemplate>
 
      {images.map(item => {

        return (<ImageProduct  key={images.indexOf(item)} src={process.env.PUBLIC_URL + item.images[0].url} alt={item.images[0].description} />
        );
      })}

    </ImageProductTemplate>
  );
} 