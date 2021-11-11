import { WeatherInfo } from "./WeatherInfo"

export const Main =()=>{
    return(
        <main className={'main'}>
            <div className={'main-header'}>
                <h2 className={'main-header__title'}>{cityName}</h2>
            </div>
            <div className={'main-main'}>
                <WeatherInfo/>
            </div>
        </main>
    )
}