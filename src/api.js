import axios from "axios";
const BaseURL = "https://api.quicksell.co/v1/internal/frontend-assignment"

const getData = ()=>{
    return axios.get(BaseURL)
}