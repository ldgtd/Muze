import Vue from 'vue'
import Vuex from 'vuex'
import * as VuexFire from 'vuexfire'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    events: []
  },
  mutations: VuexFire.firebaseMutations,
  getters: {
    users: state => state.users,
    events: state => state.events
  },
  actions: {
    setUsersRef: VuexFire.firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('users', ref)
    }),
    setEventsRef: VuexFire.firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('events', ref)
    })
  }
})

export default store
