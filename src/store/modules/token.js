const type = {
  SET_TOKEN: 'SET_TOKEN'
};

const state = {
  token: ''
};

const getters = {
  token: state => state.token
};

const mutations = {
  [type.SET_TOKEN](state, token) {
    if (token) state.token = token;
    else state.token = ''
  }
};

const actions = {
  setToken: ({commit}, token) => {
    commit(type.SET_TOKEN, token)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
