
import style from './ImageProductReview.module.scss';

export function ImageProductReview() {

  //  const getImages = useRecoilValue<Items[]>(cartState)
  const getImages = JSON.parse(localStorage.getItem('Cart'));
  const images = [...getImages];

  return (
    <div className={`${style.review__image}`}>

      {images.map(item => {

        return (<img className={style['review__image--setup']} key={images.indexOf(item)} src={process.env.PUBLIC_URL + item.images[0].url} alt={item.images[0].description} />
        );
      })}

    </div>
  );
}