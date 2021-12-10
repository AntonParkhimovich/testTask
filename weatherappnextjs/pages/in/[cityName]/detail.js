
import MainLayout from '../../../components/MainLayout'
import { getResponce } from "../../../API/functionResponse";
import { paramsHourResponce } from "../../../API/response";
import { useDispatch } from 'react-redux';
import { changeWeatherData } from '../../../store/weatherSlice';
import { WeatherCurrent } from '../../../components/WeatherCurrent';

export default function Detail({ weatherData }) {
    const dispatch = useDispatch()
    dispatch(changeWeatherData(weatherData))
    return (
        <MainLayout>
            <WeatherCurrent forecastDay={weatherData} />
        </MainLayout>
    )
}
export const getServerSideProps = async (context) => {
    const responce = await getResponce("forecast.json", paramsHourResponce(context.query.cityName))
    const weatherData = await responce.data.forecast.forecastday
    return { props: { weatherData } }
}