const Utils = {
  isLeapYear: function (y) { // 是否为闫年
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
  },
  //  返回星期数
  getWhatDay: function (year, month, day) {
    const date = new Date(year + '/' + month + '/' + day)
    const index = date.getDay()
    const dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return dayNames[index]
  },
  //  返回星期数
  getMonthPreDay: function (year, month) {
    const date = new Date(year + '/' + month + '/01')
    let day = date.getDay()
    if (day === 0) {
      day = 7
    }
    return day
  },
  getMonthDays: function (year, month) { // 返回月份天数
    if (/^0/.test(month)) {
      month = month.split('')[1]
    }
    return [0, 31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  },
  getNumTwoBit: function (n) { // 补齐数字位数
    n = Number(n)
    return (n > 9 ? '' : '0') + n
  },
  date2Str: function (date, split) { // 日期对象转成字符串
    if (typeof date === 'string') return date
    split = split || '-'
    const y = date.getFullYear()
    const m = this.getNumTwoBit(date.getMonth() + 1)
    const d = this.getNumTwoBit(date.getDate())
    return [y, m, d].join(split)
  },
  getDay: function (i) { // 返回日期格式字符串
    i = i || 0
    let date = new Date()
    const diff = i * (1000 * 60 * 60 * 24)
    date = new Date(date.getTime() + diff)
    return this.date2Str(date)
  },
  timestampToDate: function (timestamp) { // 时间戳转换为日期格式
    const date = new Date(timestamp)
    return date.getFullYear() + '-' + this.getNumTwoBit((date.getMonth() + 1)) + '-' + this.getNumTwoBit(date.getDate())
  },
  compareDate: function (date1, date2, flag) { // 时间比较
    // console.log(flag, date1, date2);
    const startTime = new Date(date1.replace('-', '/').replace('-', '/'));
    const endTime = new Date(date2.replace('-', '/').replace('-', '/'));
    if (startTime >= endTime) {
      return false
    }
    return true
  },
  compareDateBefore: function (date1, flag) { // 时间比较(是否是当天以前的)
    const date = new Date()
    const trans = date.getFullYear() + '-' + this.getNumTwoBit((date.getMonth() + 1)) + '-' + this.getNumTwoBit(date.getDate());
    const startTime = new Date(trans.replace('-', '/').replace('-', '/'));
    const endTime = new Date(date1.replace('-', '/').replace('-', '/'));
    console.log(flag, trans, date1);
    if (startTime >= endTime) {
      return false
    }
    return true
  },
  isEqual: function (date1, date2) { // 时间是否相等
    const startTime = new Date(date1).getTime()
    const endTime = new Date(date2).getTime()
    if (startTime === endTime) {
      return true
    }
    return false
  }
}

export default Utils
