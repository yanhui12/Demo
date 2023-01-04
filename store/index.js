// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    activePage: '',
    menuList: []
})
const mutations = {
  changeActivePage(state, option) {
    console.log('changeActivePage===', state, option)
    state.activePage = option
  },
  setMenuList(state, option) {
    console.log('setMenuList=====', state, option)
    state.menuList = option
  }
}
export default {
  state,
  mutations
}