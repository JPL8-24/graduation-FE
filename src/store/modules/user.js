const state= {
    userName:'',
    userID:'',
    type:'',
    portrait:''
}
const mutations={
    changeUserInfo(state,payload){
        state.userID=payload.userID
        state.userName=payload.userName
        state.type=payload.type
        state.portrait=payload.portrait
    }
}

export default{
    state,
    mutations
}