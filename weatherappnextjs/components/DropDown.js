import { useSelector, useDispatch } from "react-redux"
import { selectForecastDay } from "../store/weatherSlice"
export const DropDowm = () => {
    const { forecastDaySelect, forecastDayData } = useSelector(state => state.history)
    const dispatch = useDispatch()

    return (
        <div className={'dropdown'}>
            <select className={'dropdown-select'} value={forecastDaySelect.date} onChange={(event) => dispatch(selectForecastDay(event.target.value))}>
                {forecastDayData.map((item) => {
                    return <option className={'dropdown-option'} key={item.date}>{item.date}</option>
                })}
            </select>
        </div>
    )
}