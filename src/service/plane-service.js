import axios from '@/axios/axios'
export default {
  getCitys (type) { // 获取国内城市
    return axios.get(`/international/getAirportVoList?type=${type}`)
      .then(res => {
        return res;
      })
  },
  getCountry (deltaNames) { // 根据大洲  获取   城市
    return axios.get(`/international/getAirportVoListByDeltaName?deltaNames=${deltaNames}`)
      .then(res => {
        return res;
      })
  },
  searchCity(key, pageNum, pageSize, type) { // 根据 key 搜索城市
    return axios.get(`/international/getAirportVoListByKey?key=${key}&pageNum=${pageNum}&pageSize=${pageSize}&type=${type}`)
      .then(res => {
        return res;
      })
  },
  searchFlightList(param) { // 搜索 航班 list
    return axios.post(`/international/flightSearch`, param)
      .then(res => {
        return res;
      })
  },
  searchFlightRetrunList(param) { // 查询飞机返程航班列表
    return axios.post(`/international/flightReturn`, param)
      .then(res => {
        return res;
      })
  },
  getFlightDetail(param) { // 查询飞机航班详情
    return axios.post(`/international/flightDetail`, param)
      .then(res => {
        return res;
      })
  },
  createaAirportOrder(param) { // 创建国际机票订单
    return axios.post(`/international/order/createaAirportOrder`, param)
      .then(res => {
        return res;
      })
  }
}
