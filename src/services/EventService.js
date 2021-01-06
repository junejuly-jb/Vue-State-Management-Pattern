import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {

    getEvents() {
        return apiClient.get('/events')
    },

    addEvents(payload) {
        return apiClient.post('/events', payload)
    },

    getEvent(id) {
        return apiClient.get('/events/' + id);
    }

}