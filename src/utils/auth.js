import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'
const TokenKey = 'JSESSIONID'

export function getToken () {
  return Cookies.get(TokenKey) || ''
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function setLoginMode (mode) {
  localStorage.setItem('login-mode', mode)
}

export function getLoginMode () {
  return localStorage.getItem('login-mode') || ''
}
