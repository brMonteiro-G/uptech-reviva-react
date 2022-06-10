import style from './InfoReview.module.scss'
import { ReviewItem } from './ReviewItem/ReviewItem'
import { ReviewTitle } from './ReviewTitle/ReviewTitle'

export function InfoReview() {
    return (
        <div className={`${style.review__info}`}>
            <div className={style["review__info--title"]} >
              <ReviewTitle/>

            </div>
            <div className={style["review__info--item"]}>
               <ReviewItem/>
            </div>



        </div>
    )
}