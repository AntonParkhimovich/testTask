export const WeatherFooterItem = ({ item }) => {

    return (
        <li className={'footer-info__item'}>
            <span className={'item-info'}>{item.date}</span>
            <span className={'item-info'}>{item.day.maxtemp_c}</span>
            <span className={'item-info'}>{item.day.mintemp_c}</span>
            <span className={'item-info'}>{item.day.condition.text}</span>
            <span className={'item-info'}>{item.day.maxwind_kph}</span>
        </li>
    )
}