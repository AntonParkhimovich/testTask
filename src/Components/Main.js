import { WeatherInfo } from "./WeatherInfo"
import { ButtonChangeCity } from "./ButtonChangeCity"
import { selectNextCity, selectPreviusCity } from "../store/weatherSlice"
export const Main = () => {

    return (
        <main className={'main'}>
                <ButtonChangeCity className={'button button-previus'} onClickFunc={selectPreviusCity} />
                <WeatherInfo />
                <ButtonChangeCity className={'button button-next'} onClickFunc={selectNextCity} />
        </main>
    )
}