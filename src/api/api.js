import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
    test(){
        return axios.get('http://localhost:3000/')
    }
}