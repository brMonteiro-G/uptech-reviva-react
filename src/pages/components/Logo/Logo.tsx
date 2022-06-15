import { Link } from 'react-router-dom';
import style from './Logo.module.scss';

interface PropsLogo {
  dimension: string
  justify: string
}

export function Logo(props: PropsLogo) {
  const route = {
    label:'home',
    to:'/'
  };

  if (props.dimension === 'big') {
    return (
      <div className={style['header__logo']}>
        <Link to={route.to} className={style['header__logo--index']} >
          {props.dimension === 'big' ? <h1>Reviva Fashion</h1> : <p>Reviva Fashion</p>}
          <h1>Reviva Fashion</h1>
          <small>by RCHLO</small>
        </Link>
      </div>
    );
  } else {
    return (
      <strong className={style['logo--right']}>
        <p>Reviva Fashion</p>
        <span>by RCHLO</span>
      </strong>
    );
  }




}