import service from '@/network/requestProject'

export default {
  get(params) {
    return service({
      url: '/sendToBeebot',
      method: 'get',
      params,
    })
  }
}