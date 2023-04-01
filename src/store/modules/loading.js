/*
 * 全局Loading控制Store
 * 推荐按create/update/query/list/batch/delete后缀作区分
 * 同一类型的操作可以使用相同的key
 * @author jun
 */
const loading = {
  namespaced: true,
  state: {
    'sendToBeebot:create': false
  },
  getters: {
    loadingStatus: (state) => {
      return state;
    },
  },
  mutations: {
    startLoading: (state, url) => {
      state[url] = true;
    },
    stopLoading: (state, url) => {
      state[url] = false;
    },
  },
};

export default loading;
