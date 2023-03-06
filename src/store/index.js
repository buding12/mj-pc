import Vue from 'vue';
import Vuex from 'vuex';
import { getLocal, setLocal } from '@/utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 将得到的数据返回到state中
    token: getLocal('TOKEN'),
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state, val) {
      // 在保存token时，对token数据持久化
      setLocal('TOKEN', val);
      state.token = val;
    },
  },
  actions: {
  },
  modules: {
  },
});
