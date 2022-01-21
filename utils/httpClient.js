import axios from 'axios'



const httpClient = axios.create({
    baseURL: 'https://ciesatic.herokuapp.com/api',
})
export default httpClient