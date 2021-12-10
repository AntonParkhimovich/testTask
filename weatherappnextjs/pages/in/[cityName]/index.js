import { getResponce } from "../../../API/functionResponse";
import { useRouter } from "next/router";
import { paramsHourResponce } from "../../../API/response";
import MainLayout from "../../../components/MainLayout"
import { WeatherDay } from "../../../components/WeatherDay";
import { useDispatch, useSelector } from "react-redux";
import { initCityHistory } from "../../../store/weatherSlice";
import axios from "axios";
import { ButtonChangeCity } from "../../../components/ButtonChangeCity";
import { ButtonAddToCollection } from "../../../components/ButtonAddToCollection";
export default function WeatherInfo({ weatherData, cityData, errorCode }) {
    const dispatch = useDispatch()
    const router = useRouter()
    const searchCity = useSelector(state => state.history.searchCity)
    dispatch(initCityHistory({
        cityData: cityData,
        citySelect: router.query.cityName
    }))
    const selectNextCity = (citySelect, cityData) => {
        if (citySelect.id === cityData.length - 1) {
            return cityData[0].city
        }
        else {
            return cityData[citySelect.id + 1].city
        }
    }
    const selectPreviusCity = (citySelect, cityData) => {
        if (citySelect.id === 0) {
            return cityData[cityData.length - 1].city
        }
        else {
            return cityData[citySelect.id - 1].city
        }
    }
    return (
        <>
            <MainLayout>
                <div className={'main'}>
                    <ButtonChangeCity className={'button button-previus'} onClickFunc={selectPreviusCity} />
                    {searchCity ? <ButtonAddToCollection /> : null}
                    <WeatherDay weatherData={weatherData} />
                    <ButtonChangeCity className={'button button-previus'} onClickFunc={selectNextCity} />
                </div>
            </MainLayout>
        </>
    )
}
export const getServerSideProps = async (context) => {
    const responce = await getResponce("forecast.json", paramsHourResponce(context.query.cityName))
    const cityResponce = await axios.get('http://localhost:4000/cityData')
    const cityData = await cityResponce.data
    const weatherData = await responce.data
    return {
        props: { weatherData, cityData },
    }

}