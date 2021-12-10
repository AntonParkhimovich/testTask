import axios from 'axios'
import { baseUrlResponce } from "./response"
export const getResponce = (type, params)=>{ //функция принимающая в себя три параметра, тип запроса, параметры запроса, и сетер для стейта
    return  axios.get(`${baseUrlResponce}/${type}`,{params})
    .then((responce)=>responce)
    
}