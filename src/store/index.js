import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter.js'
import operate from './operate.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'rootStateName'
  },
  modules: {
    counter,
    operate
  }
})
export default store
