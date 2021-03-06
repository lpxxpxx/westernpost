import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: '西邮移动端',
  user: 'Narotu',
  warehouse: {},
  /* url: 'http://localhost:8080', */
  /* url: 'http://westwms.qa.aukeyit.com', */
  url: '',
  userEmail: '',
  phoneType: '',
  lang: '',
  status: '',
  temporary: {}
}

const getters = {
  getTitle: state => state.title,
  getUser: state => state.user,
  getWarehouse: state => state.warehouse,
  getUrl: state => state.url,
  getUserEmail: state => state.userEmail,
  getPhoneType: state => state.phoneType,
  getLang: state => state.lang,
  getStatus: state => state.status,
  getTemporary: state => state.temporary
}

const mutations = {
  changeTitle: (state, text) => { state.title = text },
  changeUser: (state, text) => { state.user = text },
  changeWarehouse: (state, text) => { state.warehouse = text },
  changeUrl: (state, text) => { state.url = text },
  changeUserEmail: (state, text) => { state.userEmail = text },
  changePhoneType: (state, text) => { state.phoneType = text },
  changeLang: (state, text) => { state.lang = text },
  changeStatus: (state, text) => { state.status = text },
  changeTemporary: (state, text) => { state.temporary = text }
}

const actions = {
  setTitle: (context, text) => { context.commit('changeTitle', text) },
  setUser: (context, text) => { context.commit('changeUser', text) },
  setWarehouse: (context, text) => { context.commit('changeWarehouse', text) },
  setUrl: (context, text) => { context.commit('changeUrl', text) },
  setUserEmail: (context, text) => { context.commit('changeUserEmail', text) },
  setPhoneType: (context, text) => { context.commit('changePhoneType', text) },
  setLang: (context, text) => { context.commit('changeLang', text) },
  setStatus: (context, text) => { context.commit('changeStatus', text) },
  setTemporary: (context, text) => { context.commit('changeTemporary', text) }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
