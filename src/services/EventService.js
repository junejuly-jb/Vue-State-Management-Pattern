import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

apiClient.interceptors.request.use(config => {
    NProgress.start()
    return config
})


apiClient.interceptors.response.use(response => {
    NProgress.done()
    return response
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
    },

    deleteEvent(id) {
        return apiClient.delete('/events/' + id)
    }

}