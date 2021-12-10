import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { changeSearchCity } from "../store/weatherSlice";


export const Search = () => {
    const [searchCity, setCity] = useState('')
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        if (searchCity !== '') {
            const timeOut = setTimeout(() => {
                router.push(`/in/${searchCity}`)
                dispatch(changeSearchCity())
                setCity('')
            }, 1500)
        }
        return () => clearTimeout(timeOut)
    }, [searchCity])


    return (
        <div className={'search'}>
            <input type={'text'}
                className={'search-input'}
                placeholder={'Enter city'}
                value={searchCity}
                onChange={({ target }) => setCity(target.value)} />
        </div>
    )
}