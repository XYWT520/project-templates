import service from '@/network/requestProject'

export default {
  get(params) {
    return service({
      url: '/api/sendToBeebot',
      method: 'get',
      params,
    })
  }
}