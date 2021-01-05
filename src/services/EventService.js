import axios from 'axios'

const apiClient = axios.create({
    baseUrl: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {

    getEvents() {
        return apiClient.get('/events')
    }
    
}