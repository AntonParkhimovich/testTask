import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addNewElementCityData, updateSearchCity } from "../store/weatherSlice"
export const ButtonAddSearchHistory = () => {
    const { citySelect } = useSelector(state => state.history)
    const error = useSelector(state => state.weatherData.error)
    const dispatch = useDispatch()
    const clickHandler = () => {
        if (error === null) {
            dispatch(addNewElementCityData(citySelect))
            dispatch(updateSearchCity(false))
        }
    }
    useEffect((dispatch) => {
        if (error !== null) {
            dispatch(updateSearchCity(false))
        }
    }, [error])
    return <button className={'button add'} onClick={clickHandler}>Add to favorites</button>
}