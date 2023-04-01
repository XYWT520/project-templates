import { message } from 'ant-design-vue';

export default {
  appKey: 'appKey',
  secret: 'secret',
  version: '1.0',
  // 全局 http 请求遮罩
  Loading: false,
  // 获取系统配置，生产环境下需开启（非平台后端架构则不需要）
  SystemConfig: false,
  http: {
    baseURL: '/api',
  },
  // 全局 http 错误回调
  error(msg) {
    message.error(msg);
  },
  // apis 路径
  apis: require.context('@/apis', true, /\.js$/),
  // 权限控制
  permission: false,
  // permission: {
  //   sessionUrl: '/euler/mp/q/user/session/get',
  //   cookieUrl: '/euler/session/checkCookie',
  //   appUrl: '/euler/mp/q/resource/listAccessibleAppTree',
  // },

  // 全局控件配置
  components: {
    EcPager: {
      defaultPageSize: 5,
      pageSizeOptions: ['10', '15', '30', '50', '100'],
    },
    EcContainer: {
      showTitle: true,
      height: 'auto',
    },
  },
};
