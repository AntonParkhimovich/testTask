import { WeatherFooterItem } from './WeatherFooterItem';
import { Search } from './Search';
import Image from 'next/image'
export const WeatherDay = ({ weatherData }) => {
    return <section className={'weather-day'}>
        <Search />
        <div className={'weather-day__header'}>
            <Image
                src={`https:${weatherData.current.condition.icon}`}
                alt="weather-coundition"
                className={'weather-day__header-icon'}
                width={100}
                height={100}
            />
            <span className={'header-temp'}>{`${weatherData.current.temp_c} \u00b0C`}</span>
            <span className={'header-city'}>{weatherData.location.name}</span>
        </div>
        <div className={'weather-day__main'}>
            <div className={'main-info__box'}>
                <span className={'box-info'}>{`Feels like: ${weatherData.current.feelslike_c} \u00b0C`}</span>
                <span className={'box-info'}>{`Wind speed: ${weatherData.current.wind_kph} kp/h`}</span>
            </div>
            <div className={'main-info__box'}>
                <span className={'box-info'}>Today is: {weatherData.current.condition.text}</span>
                <span className={'box-info'}> Wind direction: {weatherData.current.wind_dir}</span>
            </div>
        </div>
        <div className={'weather-day__footer'}>
            <div className={'weather-info__head'}>
                <span>Date:</span>
                <span>Max temp:</span>
                <span>Min temp:</span>
                <span>Condition:</span>
                <span>Wind Speed:</span>
            </div>
            <ul className={'weather-info__list'}>
                {weatherData.forecast.forecastday.map((item, index) => {
                    return <WeatherFooterItem item={item} key={index} />
                })}
            </ul>
        </div>
    </section>


}
