import Vue from 'vue';
import Vuex from 'vuex';
import { getModuleName } from '@/utils/stringUtil';

Vue.use(Vuex);
const context = require.context('./modules', false, /\.js$/);
const keys = context.keys().filter((item) => item !== './index.js');
const modules = Object.create({});
for (let i = 0; i < keys.length; i += 1) {
  !!getModuleName(keys[i]) && (modules[getModuleName(keys[i])] = context(keys[i]).default);
}

export default new Vuex.Store({
  state: {
    keepAliveViews: ['EcView', 'Home'], // 动态缓存的标签页面(默认主页缓存)
  },
  mutations: {
    // 设置动态缓存标签页面
    SET_KEEP_ALIVE(state, navTabs = []) {
      const keepAliveViews = ['EcView', 'Home'];
      navTabs.forEach(({ name, keepAlive }) => name && keepAlive && keepAliveViews.push(name));
      state.keepAliveViews = keepAliveViews;
    },
    // 删除动态缓存标签页面
    DEL_KEEP_ALIVE(state, name) {
      const vIndex = state.keepAliveViews.indexOf(name);
      vIndex !== -1 && state.keepAliveViews.splice(vIndex, 1);
    },
  },
  actions: {},
  modules,
});
