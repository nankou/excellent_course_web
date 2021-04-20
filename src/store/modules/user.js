const type = {
  SET_USER: 'SET_USER'
};

const state = {
  user: {}
};

const getters = {
  user: state => state.user
};

const mutations = {
  [type.SET_USER](state, user) {
    if (user) state.user = user;
    else state.user = {}
  }
};

const actions = {
  setUser: ({commit}, user) => {
    commit(type.SET_USER, user)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
