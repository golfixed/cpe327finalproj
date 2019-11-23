import Vue from 'vue'
import Vuex from 'vuex'
import {
    start
} from 'repl'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        orderList: [{}],
    }),
    mutations: {
        // SWITCH_ROLE: (state, role) =>  state.user.role = role,
        // CHANGE_USER: (state, user) => state.user = user,
        UPDATE_LIST: (state, newlist) => state.orderList = newlist,
    }
})

export default store