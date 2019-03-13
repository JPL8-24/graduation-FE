const state={
    localDb:[],
    questionInfo:{},
    questionIndex:0,
    userAnswer:[]
}

const mutations= {
    setLocalDb(state,payload){
        state.localDb=payload.questions.slice()
    },
    setQuestionInfo(state,payload){
        Object.assign(state.questionInfo,payload)
    },
    setQustionIndex(state,payload){
        if(payload.index || payload.index==0){
            state.questionIndex=payload.index
        } else {
            state.questionIndex+=1
        }
    },
    setPreQuestionIndex(state){
        if(state.questionIndex<0){
            state.questionIndex=0
        } else {
            state.questionIndex-=1
        }
    }
}

export default{
    state,
    mutations
}