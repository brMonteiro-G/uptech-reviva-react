import { useRecoilValue } from 'recoil'
import { cartState } from '../../../state/atoms/cartState'
import style from './InfoReview.module.scss'
import { ReviewItem } from './ReviewItem/ReviewItem'
import { ReviewTitle } from './ReviewTitle/ReviewTitle'

export function InfoReview() {

    const productsOnCart = useRecoilValue(cartState)
    //console.log(productsOnCart)
    return (
        <div className={`${style.review__info}`}>
            <>
                <div className={style["review__info--title"]} >
                    <ReviewTitle />

                </div>
                 {
                 productsOnCart.map((_,productCartindex) => { 
                    return(
                    <div className={style["review__info--item"]}>
                        <ReviewItem
                            //melhorar esse codigo 
                            item = {productsOnCart.find((_, indice) => indice === productCartindex )}
                        />
                    </div>

                    )
                 }) 
                 } 
            </>
        </div>
    )
}