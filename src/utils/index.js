// 常见公共方法
export function $local(key, value) { // loacl方法封装
  if (typeof value === 'undefined') {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } else {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
}
