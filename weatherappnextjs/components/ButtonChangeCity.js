import { useSelector } from "react-redux"
import { useRouter } from "next/router";


export const ButtonChangeCity = ({ className, onClickFunc }) => {
    const { citySelect, cityHistory, searchCity } = useSelector(state => state.history)
    const router = useRouter()

    const clickHandler = () => {
        router.push(`/in/${onClickFunc(citySelect, cityHistory)}`)
    }
    return (
        searchCity ? null : <button className={className} onClick={clickHandler}></button>
    )
}