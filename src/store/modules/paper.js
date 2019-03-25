const state = {
    localDb: [],
    questionInfo: {},
    questionIndex: 0
}

const mutations = {
    setLocalDb(state, payload) {
        state.localDb = payload.questions.slice()
    },
    setQuestionInfo(state, payload) {
        Object.assign(state.questionInfo, payload)
    },
    setQustionIndex(state, payload) {
        if (payload.index || payload.index == 0) {
            state.questionIndex = payload.index
        } else {
            state.questionIndex += 1
        }
    },
    setPreQuestionIndex(state) {
        if (state.questionIndex < 0) {
            state.questionIndex = 0
        } else {
            state.questionIndex -= 1
        }
    },
    setUserAnswer(state, payload) {
        const currentQuestion = state.localDb[state.questionIndex]
        Object.assign(currentQuestion, payload)
    },
    checkOption(state) {
        state.localDb.forEach(element => {
            if (element.type == "1") {
                if (element.rightAnswer.indexOf(element.userAnswer) >= 0) {
                    element.isRight = true
                } else if (element.rightAnswer.indexOf(element.userAnswer) < 0) {
                    element.isRight = false
                } else {
                    element.aaa = false
                }
            } else if (element.type == "2") {
                if (element.userAnswer.length != element.rightAnswer.length) {
                    return element.isRight = false
                }
                let flag = true
                element.userAnswer.forEach((item, index, arr) => {
                    if (element.rightAnswer.indexOf(item) < 0) {
                        flag = false
                        element.isRight = false
                    }
                    if (flag) {
                        let len = arr.length - 1
                        if (index == len) {
                            if (element.rightAnswer.indexOf(item) >= 0) {
                                element.isRight = true
                            }
                        }
                    }
                })
            }
        });
    }
}

export default {
    state,
    mutations
}