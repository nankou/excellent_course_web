const type = {
  SET_REMEMBER_ME: 'SET_REMEMBER_ME'
}

const state = {
  username: '',
  rememberMe: false
}

const getters = {
  username: (state) => state.username,
  rememberMe: (state) => state.rememberMe
}

const mutations = {
  [type.SET_REMEMBER_ME] (state, info) {
    state.rememberMe = info.rememberMe
    if (state.rememberMe) state.username = info.username
    else state.username = ''
  }
}

const actions = {
  setRememberMe: ({ commit }, info) => {
    commit(type.SET_REMEMBER_ME, info)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
