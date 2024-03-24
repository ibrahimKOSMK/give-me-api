const { default : axios} = require ('axios')

const apiUrl = 'https://8203-105-192-186-211.ngrok-free.app'
const axiosClient = axios.create({
baseURL: apiUrl,



});

export default axiosClient