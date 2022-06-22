import { SelectSizeButton } from '../../../components/SelectSizeButton/SelectSizeButton';
import { useRecoilValue } from 'recoil';
import { CartProducts, cartState } from '../../../state/atoms/dynamic/cartState';
import { Addbutton } from './AddButton/AddButton';
import style from './ReviewItem.module.scss';
import { ReviewItemTemplate } from './ReviewItemStyle';
import { ImageProduct, ImageProductTemplate } from 'pages/cart/ImageProductReview/ImageProductReviewStyle';
export interface ProductsInCartProps {
  item: CartProducts | undefined;
}

export function ReviewItem({ item }: ProductsInCartProps) {
  const getImages = useRecoilValue(cartState);
  // const setButton = useAddButton()

  return (
    <>
      <ImageProductTemplate>
        < ImageProduct 
          src={item.images[0].url}
          alt={item.description}
        />
      </ImageProductTemplate>

      <p id='name'>{item.name}</p>

      <SelectSizeButton />

      <p className={style['review__price']}>R$ {item.price.toFixed(2)}</p>
      <ReviewItemTemplate>
        <div>
          {/* 
                        <button id="plus" onClick={() => {
                            const product = updateValues(item, "increase")
                            const teste = quantity.find()
                            //setButton(product)

                        }}>+</button> */}
          <Addbutton item={item} />
        </div>
        <div>
          <input
            id='amount'
            type='text'
            value={item.units_in_cart}
            readOnly={true}
          />
        </div>
        <div>
          {/* <button id="minus" onClick={() => {
                            const product = updateValues(item, "decrease")
                            setButton(product)
                        }}

                        >-</button> */}
          <Addbutton item={item} />
        </div>
      </ReviewItemTemplate>
      <p>R$ {(item.price * item.units_in_cart).toFixed(2)}</p>
    </>
  );
}
