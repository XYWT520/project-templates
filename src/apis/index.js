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
  add(data) {
    return service({
      url: '/sendToBeebot',
      method: 'post',
      data,
    });
  },

  sendToBeebot(params) {
    return service({
      url: '/sendToBeebot',
      method: 'get',
      params,
      headers: {
        loadingTag: 'sendToBeebot:create',
      },
    });
  },

  demo
}