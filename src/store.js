import Vue from 'vue'
import Vuex from 'vuex'
import Api from './class/Api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    probs: undefined,
    currentValue: 0
  },
  getters: {
    probs: state => state.probs,
    currentValue: state => state.currentValue
  },
  mutations: {
    setProbs (state, probs) {
      state.probs = probs
    },
    setCurrentValue (state, value) {
      state.currentValue = value
    }
  },
  actions: {
    async setProbs ({ commit }) {
      try {
        const probs = await Api.getProbs()
        commit('setProbs', probs.data)
      } catch (err) {
        console.log(err)
      }
    },
    setCurrentValue ({ commit }, value) {
      commit('setCurrentValue', value)
    }
  }
})
