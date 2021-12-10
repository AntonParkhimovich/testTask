import { createSlice} from "@reduxjs/toolkit";

const cityHistory = createSlice({
    name: 'cityHistory',
    initialState: {
        citySelect: {},
        cityHistory: [],
        searchCity: false,
        forecastDaySelect: {},
        forecastDayData: [],
    }, reducers: {
        changeSelectCity(state, action) {
            state.citySelect = action.payload
        },
        initCityHistory(state, action) {
         state.cityHistory = action.payload.cityData
         state.citySelect = state.cityHistory.find((item)=> item.city === action.payload.citySelect)
        },
        updateSearchHistory(state, action){
            state.cityHistory.push(action.payload)
            state.citySelect = action.payload
        },
        changeSearchCity(state, {payload}){
            state.searchCity = !state.searchCity
        },
        
        selectForecastDay(state, action) {
            state.forecastDaySelect = state.forecastDayData.find(item => item.date === action.payload)
        },
        changeWeatherData(state, action){
            state.forecastDayData = action.payload
            state.forecastDaySelect = state.forecastDayData[0]
        }
    }
})


// export const  selectForecastDay = weatherData.actions.selectForecastDay
// export const  changeWeatherData = weatherData.actions.changeWeatherData

export const { initCityHistory, selectNextCity, selectPreviusCity, changeSelectCity, updateSearchHistory,selectForecastDay,changeWeatherData, changeSearchCity} = cityHistory.actions

export const cityHistorySliceReducer = cityHistory.reducer
