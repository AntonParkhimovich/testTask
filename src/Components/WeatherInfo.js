import { Route, useParams } from "react-router-dom";
import { WeatherDay } from "./WeatherDay";
import { WeatherCurrent } from "./WeatherCurrent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWeatherData } from "../store/weatherSlice";
import { useHistory } from "react-router";
import { Error } from "./Error";
import Loader from "react-loader-spinner";


export const WeatherInfo = () => {
    const { status, error } = useSelector(state => state.weatherData)
    const { citySelect } = useSelector(state => state.history)
    const history = useHistory()
    const dispatch = useDispatch()

    const { cityPath } = useParams()
    const statusHandler = (status, error, Component) => {
        if (status === 'loading' || status === null) {
            return <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        } if (status === 'resolved') {
            return Component
        } if (status === 'rejected') {
            return <Error error={error} />
        }
    }
    useEffect((dispatch, history, status) => {
        if (status !== 'rejected') {
            dispatch(fetchWeatherData(citySelect))
        }
        history.push(`/${citySelect}`)
    }, [citySelect])

    return (
        <>
            <Route exact path={`/${cityPath}`}>
                {statusHandler(status, error, <WeatherDay />)}
            </Route>
            <Route path={`/${cityPath}/detail`}>
                {statusHandler(status, error, <WeatherCurrent />)}
            </Route>
        </>
    )





}