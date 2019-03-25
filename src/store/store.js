import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import paper from './modules/paper'
import check from './modules/check'
import analyze from './modules/analyze'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        paper,
        check,
        analyze
    },

})