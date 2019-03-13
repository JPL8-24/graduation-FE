const state= {
    userName:'',
    userID:'',
    type:''
}
const mutations={
    changeUserInfo(state,payload){
        state.userID=payload.userID
        state.userName=payload.userName
        state.tpye=payload.type
    }
}

export default{
    state,
    mutations
}