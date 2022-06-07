import { useState } from 'react'
import style from './Logo.module.scss'

interface PropsLogo {
    dimension: string
    justify: string
}

export function Logo(props: PropsLogo) {

    // const [state, setState] = useState(0)
    if (props.dimension === "big" && props.justify === "left") {
        return (
            <div className={style["header__logo"]}>
                <a className={style["header__logo--index"]} href="../html/index.html">
                    <h1>Reviva Fashion</h1>
                    <small>by RCHLO</small>
                </a>
            </div>
        )
    }
    if (props.dimension === "big" && props.justify === "right") {
        return (
            <strong className={style["footer__logo"]}>
                <p>Reviva Fashion</p>
                <small>by RCHLO</small>
            </strong>
        )
    }
   
    return (
        <strong className={style["logo--right"]}>
            <p>Reviva Fashion</p>
            <span>by RCHLO</span>
        </strong>
    )

  

}