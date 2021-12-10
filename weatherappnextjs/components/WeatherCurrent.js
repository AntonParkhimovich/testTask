import { useSelector, useDispatch } from "react-redux"
import { DropDowm } from "./DropDown"
import { ForecastHourItem } from "./ForecastHourItem"
export const WeatherCurrent = () => {
    const forecastDaySelect = useSelector(state => state.history.forecastDaySelect)
    return (
        <section className={'forecast-hour'}>
            <div className={'forecast-hour__header'}>
                <DropDowm />
            </div>
            <div className={'forecast-hour__main'}>
                 <ul className={'forecast-hour__header'}>
                    <li className={'header-item'}>Time</li>
                    <li className={'header-item'}>Temp</li>
                    <li className={'header-item'}>Condition</li>
                    <li className={'header-item'}>Wind speed</li>
                    <li className={'header-item'}>Wind direction</li>
                    <li className={'header-item'}>Pressure</li>
                </ul>
                {forecastDaySelect.hour.map((item) => {
                    return <ForecastHourItem item={item} key={item.time} />
                })}
            </div>
        </section>)
}
