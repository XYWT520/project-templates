import service from '@/network/requestProject'
import demo from './demo'
// export function sendToBeebot(params) {
//   return service({
//     url: '/sendToBeebot',
//     method: 'get',
//     params,
//     headers: {
//       loadingTag: 'sendToBeebot:create',
//     },
//   });
// }

// export const add = (data) => {
//   return service({
//     url: '/sendToBeebot',
//     method: 'post',
//     data,
//   });
// }

export default {
  add (data) {
    return service({
      url: '/api/sendToBeebot',
      method: 'post',
      data,
    });
  },

  getList (params) {
    return service({
      url: '/api/getList',
      method: 'get',
      params,
      headers: {
        loadingTag: 'sendToBeebot:create',
      },
    });
  },

  addList (data) {
    return service({
      url: '/api/addList',
      method: 'post',
      data
    });
  },

  demo
}