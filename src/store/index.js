import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    media: false,
    mediaAngulo: 0,
    mediaFriction: 0,
    result: null
  },
  mutations: {
    SET_MEDIA(state, value){
      state.media = value
    },
    SET_MEDIA_ANGULO(state, value){
      state.mediaAngulo = value
    },
    SET_MEDIA_FRICTION(state, value){
      state.mediaFriction = value
    },
    SET_RESULT(state, value){
      state.result = value
    },
  },
  actions: {
  },
  modules: {
  }
})
