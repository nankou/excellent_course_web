const type = {
  SET_ROLES: 'SET_ROLES'
}

const state = {
  roles: []
}

const getters = {
  roles: (state) => state.roles
}

const mutations = {
  [type.SET_ROLES] (state, roles) {
    state.roles = roles
  }
}

const actions = {
  setRoles: ({ commit }, roles) => {
    commit(type.SET_ROLES, roles)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
