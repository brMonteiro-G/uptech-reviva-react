
import { SelectSizeButton } from '../../../components/SelectSizeButton/SelectSizeButton';
import { useRecoilValue } from 'recoil';
import { buttonState } from '../../../state/atoms/buttonState';
import { CartProducts, cartState } from '../../../state/atoms/cartState';
import { useAddButton } from '../../../state/hooks/useAddButton';

import { updateValues } from '../../../utils/updateValue';
import { Addbutton } from './AddButton/AddButton';
import style from './ReviewItem.module.scss';
import { ImageProductReview } from 'pages/cart/ImageProductReview/ImageProductReview';
import styleImg from '../../ImageProductReview/ImageProductReview.module.scss';
export interface ProductsInCartProps {
  item: CartProducts | undefined
}

export function ReviewItem({ item }: ProductsInCartProps) {
  const getImages = useRecoilValue(cartState);
  // const setButton = useAddButton()


  return (


    <>

      <div>
        <img className={styleImg['review__image--setup']}src={item.images[0].url} alt={item.description} />
      </div>

      <p id="name">{item.name}</p>

      <SelectSizeButton />


      <p className={style['review__price']}>R$ {item.price.toFixed(2)}</p>
      <div className={style['review__select']}>
        <div>{/* 
                        <button id="plus" onClick={() => {
                            const product = updateValues(item, "increase")
                            const teste = quantity.find()
                            //setButton(product)

                        }}>+</button> */}
        <Addbutton
          item={item}
        />

        </div>
        <div>
          <input id="amount" type="text" value={item.units_in_cart} readOnly={true} />
        </div>
        <div>
          {/* <button id="minus" onClick={() => {
                            const product = updateValues(item, "decrease")
                            setButton(product)
                        }}

                        >-</button> */}
          <Addbutton
            item={item}
          />
        </div>

      </div>
      <p>R$ {(item.price * item.units_in_cart).toFixed(2)}</p>
    </>


  );
}

