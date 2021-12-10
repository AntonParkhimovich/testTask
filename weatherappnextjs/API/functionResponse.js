import axios from 'axios'
import { baseUrlResponce } from "./response"
export const getResponce = (type, params)=>{ 
    return  axios.get(`${baseUrlResponce}/${type}`,{params})
    .then((responce)=>responce)
    
}