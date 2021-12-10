import  {useDispatch}  from 'react-redux'
import { changeSelectCity, updateStatus} from "../store/weatherSlice";

export const Error = ({error})=>{
    const dispatch = useDispatch()
    const clickHandler = ()=>{
        dispatch(changeSelectCity('minsk'))
        dispatch(updateStatus())
    }
    return(<>
        <h2 className={'error'}>{error}</h2>
        <button className={'btn-home'}onClick={clickHandler}>OK</button>
        </>
    )
}