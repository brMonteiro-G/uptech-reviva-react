import style from './SearchBar.module.scss'


export function SearchBar() {
    return (
        <fieldset className={style["searchBar"]}>
        <input className={style["searchBar__input"]} id="name" name="search" placeholder="Faça sua busca aqui se já souber o que está procurando..."
            type="text" />

        <button className={style["searchBar__button"]} >
        </button>

    </fieldset>
)
}