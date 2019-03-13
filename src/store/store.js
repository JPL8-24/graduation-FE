import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import paper from './modules/paper'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        paper
    },

})