export const baseUrlResponce='http://api.weatherapi.com/v1'
export const paramsDayResponce=(city)=>{
    let params = {
        q:city,
        key:'bd4e476dac7144cebe4212758211211',
        lang:"ru",
        days:'3'
       }
   return params
}
export const paramsHourResponce = (city)=>{
    let params ={
        q:city,
        key:'bd4e476dac7144cebe4212758211211',
        lang:"en",
        days: '4',
    }
    return params
}