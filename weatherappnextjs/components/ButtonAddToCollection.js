import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { changeSearchCity, updateSearchHistory } from "../store/weatherSlice"

import axios from "axios"
export const ButtonAddToCollection = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const clickHandler = async () => {
        const response = await axios.post('http://localhost:4000/cityData', { city: router.query.cityName.toLowerCase() })
        dispatch(changeSearchCity())
        dispatch(updateSearchHistory(response.data))
    }

    return (
        <button className={'button add-city'} onClick={clickHandler}>add to collection</button>
    )
}