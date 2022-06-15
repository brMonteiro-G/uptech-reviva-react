import { useRecoilValue } from 'recoil';
import { buttonState } from '../../../state/atoms/buttonState';
import { CartProducts, cartState } from '../../../state/atoms/cartState';
import { useAddButton } from '../../../state/hooks/useAddButton';

import { updateValues } from '../../../utils/updateValue';
import { Addbutton } from './AddButton/AddButton';
import style from './ReviewItem.module.scss';

export interface ProductsInCartProps {
    // unit:number
    item: CartProducts | undefined
}

export function ReviewItem({ item }: ProductsInCartProps) {
  const quantity = useRecoilValue(cartState);
  // const setButton = useAddButton()


  return (

    <>
      <>
        <p id="name">{item.name}</p>
        {/* pode virar componente */}
        <fieldset className={style['details__button--size']}>

          <div className={style['details__button--size--p']}>
            <input type="radio" name="size" value="0" id="radio-1" />
            <label htmlFor="radio-1">Tamanho P</label>
          </div>

          <div className={style['details__button--size--m']}>
            <input type="radio" name="size" value="1" id="radio-2" />
            <label htmlFor="radio-2">Tamanho M</label>
          </div>

          <div className={style['details__button--size--g']}>
            <input type="radio" name="size" value="2" id="radio-3" />
            <label htmlFor="radio-3">Tamanho G</label>
          </div>

        </fieldset>
        <p className={style['review__price']}>R$ {item.price.toFixed(2)}</p>
        <div className={style['review__select']}>
          <div>{/* 
                        <button id="plus" onClick={() => {
                            const product = updateValues(item, "increase")
                            const teste = quantity.find()
                            //setButton(product)

                        }}>+</button> */}
          <Addbutton
            item = {item}
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
              item = {item}
            />
          </div> 
                   
        </div>
        <p>R$ {(item.price * item.units_in_cart).toFixed(2)}</p>
      </>

    </>

  );
}

