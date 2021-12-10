export const ForecastHourItem = ({ item }) => {
    const { time, temp_c, condition, wind_kph, wind_dir, pressure_mb } = item

    return (
        <ul className={'forecast-hour__item-list'}>
            <li className={'list-item'}>{time.slice(10)}</li>
            <li className={'list-item'}>{temp_c}</li>
            <li className={'list-item'}>{condition.text}</li>
            <li className={'list-item'}>{wind_kph}</li>
            <li className={'list-item'}>{wind_dir}</li>
            <li className={'list-item'}>{pressure_mb}</li>
        </ul>
    )
}