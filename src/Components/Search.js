import { changeSelectCity, updateSearchCity } from "../store/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ButtonAddSearchHistory } from "./ButtonAddSearhHistory";

export const Search = () => {
    const [searchCity, setCity] = useState('')
    const dispatch = useDispatch()
    const search = useSelector(state => state.history.searchCity)
    const clickHandler = () => {
        if (searchCity !== '') {
            dispatch(changeSelectCity(searchCity))
            setCity('')
            dispatch(updateSearchCity(true))
        }
    }

    return (
        <div className={'search'}>
            <input type={'text'}
                className={'search-input'}
                placeholder={'Enter city'}
                value={searchCity}
                onChange={({ target }) => setCity(target.value)} />
            <button className={'button button-search'} onClick={clickHandler}>Search</button>
            {search ? <ButtonAddSearchHistory /> : null}
        </div>
    )
}