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
    },
    postResultToStu(userID,questionInfo){
        return axios.post('/api/resultToStu',{
            userID,
            questionInfo
        })
    },
    postResultToTea(teaID,questionInfo){
        return axios.post('/api/resultToTea',{
            teaID,
            questionInfo
        })
    },
    getCheckList(teacherID){
        return axios.get(`/api/checkList?teacherID=${teacherID}`)
    },
    getStuResult(userID,paperID){
        return axios.get(`/api/studentResult?userID=${userID}&paperID=${paperID}`)
    },
    postCheckResult(payload){
        return axios.post('/api/checkResult',payload)
    },
    getUserPaperList(userID){
        return axios.get(`/api/users/PaperList?userID=${userID}`)
    },
    postAddForum(payload){
        return axios.post('/api/addForum',{
            payload
        })
    },
    getPostList(page,pageSize){
        return axios.get(`/api/postList?page=${page}&pageSize=${pageSize}`)
    },
    getPostDetail(postID){
        return axios.get(`/api/postDetail?postID=${postID}`)
    },
    postAddComment(postID,payload) {
        return axios.post('/api/addComment',{
            postID,
            payload
        })
    },
    postAddReply(postID,commentID,payload){
        return axios.post('/api/addReply',{
            postID,
            commentID,
            payload
        })
    },
    postRemoveComment(postID,commentID){
        return  axios.post('/api/removeComment',{
            postID,
            commentID
        })
    },
    postRemoveReply(postID,commentID,replyID) {
        return axios.post('/api/removeReply',{
            postID,
            commentID,
            replyID
        })
    },
    getUserPostList(userID) {
        return axios.get(`/api/UserPostList?userID=${userID}`)
    },
    postRemovePost(userID,postID) {
        return axios.post('/api/removePost',{
            userID,
            postID
        })
    },
    postVertifyPassword(userID,passWord) {
        return axios.post('/api/vertifyPassword',{
            userID,
            passWord
        })
    },
    postModifyPassword(userID,passWord) {
        return axios.post('/api/modifyPassword',{
            userID,
            passWord
        })
    },
    postUploadPortrait(data) {
        const instance = axios.create({
            withCredentials:true
        })
        return instance.post('/api/uploadPortrait',data)
    },
    postModifyPortrait(userID,portrait) {
        return axios.post('/api/modifyPortrait',{
            userID,
            portrait
        })
    },
    postAddPaper(payload) {
        return axios.post('/api/addPaper',payload)
    }
}