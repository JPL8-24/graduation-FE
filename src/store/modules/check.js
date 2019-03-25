const state = {
    checkIndex: 0,
    checkQuestion: [],
    checkInfo:{}
}

const mutations = {
    setCheckIndex(state, payload) {
        if (payload.index || payload.index == 0) {
            state.checkIndex = payload.index
        } else {
            state.checkIndex += 1
        }
    },
    setPreQuestionIndex(state) {
        if (state.checkIndex < 0) {
            state.checkIndex = 0
        } else {
            state.checkIndex -= 1
        }
    },
    setCheckQuestion(state,payload){
        state.checkQuestion=payload.slice()
    },
    setCheckMethod(state,payload){
        const currentCheck=state.checkQuestion[state.checkIndex]
        Object.assign(currentCheck,payload)
    },
    setCheckInfo(state,payload){
        Object.assign(state.checkInfo,payload)
    }
}

export default {
    state,
    mutations
}