import axios from 'axios'
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config=>{
    let token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization=token
    }
    config.headers['content-type']='application/json; charset=utf-8'
    return config
},err=>{
    return Promise.reject(err)
})
export default {
    login(userID,userPwd){
        return axios.post('/api/users/login',{
            userID:userID,
            userPwd:userPwd
        })
    },
    getUserInfo(){
        return axios.get('/api/users/userInfo')
    },
    aotuLogin(){
        return axios.get('/api/users/autoLogin')
    },
    getPaperList(){
        return axios.get('/api/papaerList')
    },
    getPaperContent(id){
        return axios.get(`/api/paperContent?paperID=${id}`)
    }
}