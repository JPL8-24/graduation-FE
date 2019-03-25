
const state = {
    analyzeInfo:{},
    analyzeIndex:0,
    analyzeQuestion:[]
}
const mutations = {
    setAnalyzeIndex(state,index){
        state.analyzeIndex=index
    },
    setAnalyzeInfo(state,payload){
        Object.assign(state.analyzeInfo,payload)
    },
    setAnalyzeQuestion(state,payload){
        state.analyzeQuestion=payload.slice()
    }
}

export default {
    state,
    mutations
}