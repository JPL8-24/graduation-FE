const state= {
    userName:'',
    userId:''
}
const mutations={
    changeUserName(state,payload){
        state.userName=payload
        console.log(state.userName)
    }
}

export default{
    state,
    mutations
}