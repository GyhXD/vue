import axios from '@/axios/axios'
import {
  setToken
} from '@/utils/auth'
export default {
  getData () {
    return axios.post('/admin/Login/login', {
      username: 'admin',
      password: 'test1234'
    })
      .then(res => {
        var token = res.data.token
        setToken(token)
        localStorage.setItem('permissions', JSON.stringify(res))
        localStorage.setItem('userInfo', JSON.stringify(res))
        return res
      })
      .catch(err => {
        console.error(err)
      })
  },
  // getData () {
  //   return axios.post('/halo/api/app/v1/auth/password-login', {
  //     username: 'qishuang3',
  //     password: 111111
  //   })
  //     .then(res => {
  //       var token = res.data.token
  //       setToken(token)
  //       localStorage.setItem('permissions', JSON.stringify(res))
  //       localStorage.setItem('userInfo', JSON.stringify(res))
  //       return res
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // },
  getViewProject () { // 获取浏览过得项目
    return axios.get('/halo/api/app/v1/project/preview/prj')
      .then(res => res)
  }
}
