import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getResponce } from "../js/API/functionResponse";
import { paramsHourResponce } from "../js/API/response";
export const fetchWeatherData = createAsyncThunk(
    'weatherData/fetchWeatherData',
    async function (city, { rejectWithValue }) {
        try {
            const responce = await getResponce("forecast.json", paramsHourResponce(city))
            if (responce.statusText !== 'OK') {
                throw new Error('server connection fail')
            }
            return responce.data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)
const weatherData = createSlice({
    name: 'weatherData',
    initialState: {
        weatherData: {},
        forecastDaySelect: {},
        forecastDayData: [],
        status: null,
        error: null
    },
    reducers: {
        selectForecastDay(state, action) {
            state.forecastDaySelect = state.forecastDayData.find(item => item.date === action.payload)
        },
        updateStatus(state){
            state.status = null
        }

    },
    extraReducers: {
        [fetchWeatherData.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.weatherData = action.payload
            state.forecastDayData = action.payload.forecast.forecastday
            state.forecastDaySelect = action.payload.forecast.forecastday[0]
        },
        [fetchWeatherData.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})
const cityHistory = createSlice({
    name: 'cityHistory',
    initialState: {
        citySelect: 'minsk',
        cityHistory: ['minsk', 'moscow', 'brest'],
        searchCity: false
    }, reducers: {
        changeSelectCity(state, action) {
            state.citySelect = action.payload
        },
        addNewElementCityData(state, action) {
            if (!state.cityHistory.includes(action.payload.toLowerCase())) {
                state.cityHistory.push(action.payload)
            }
        },
        updateSearchCity(state, action){
            state.searchCity = action.payload
        },
        selectNextCity(state) {
            let indexCity = state.cityHistory.indexOf(state.citySelect)
            if (indexCity === state.cityHistory.length - 1) {
                state.citySelect = state.cityHistory[0]
            } else {
                state.citySelect = state.cityHistory[indexCity + 1]
            }
        },
        selectPreviusCity(state) {
            let indexCity = state.cityHistory.indexOf(state.citySelect)
            if (indexCity === 0) {
                state.citySelect = state.cityHistory[state.cityHistory.length - 1]
            } else {
                state.citySelect = state.cityHistory[indexCity - 1]
            }
        },
    }
})


export const { selectForecastDay, updateStatus} = weatherData.actions
export const { addNewElementCityData, selectNextCity, selectPreviusCity, changeSelectCity, updateSearchCity} = cityHistory.actions

export const weatherDataSliceReducer = weatherData.reducer
export const cityHistorySliceReducer = cityHistory.reducer
