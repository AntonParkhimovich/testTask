import { useSelector, useDispatch } from "react-redux"
export const ButtonChangeCity = ({ className, onClickFunc }) => {
    const{error} = useSelector(state=> state.weatherData) 
    const dispatch = useDispatch()
    return (
        error === null? 
        <button className={className} onClick={() => dispatch(onClickFunc())}></button>
        :null
    )
}