import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Antd from 'ant-design-vue';
import * as echarts from 'echarts'
import router from './router'
import store from './store'
import loding from './mixins/loading'
import 'element-ui/lib/theme-chalk/index.css';
import 'ant-design-vue/dist/antd.css';
// import config from '../config'
import apis from './apis/index.js'

Vue.prototype.$apis = apis
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
Vue.mixin(loding)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
