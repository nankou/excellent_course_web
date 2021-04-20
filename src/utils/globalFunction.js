/**
 * @param string
 * @param noAddBase
 * @return {String}
 * @description 添加URL地址+自动去除第一斜杠
 * */
export const addBaseURL = (string, noAddBase) => {
  if (string && string !== '') {
    if (string.charAt(0) !== '/' && string.charAt(0) !== '\\') {
      string = '/' + string
    }
    if (string.charAt(string.length - 1) === '/') {
      string = string.substr(0, string.length - 1)
    }
    if (noAddBase) {
      return string
    } else {
      return process.env.VUE_APP_BASE_URL + string
    }
  } else {
    return ''
  }
}


/**
 * @param {String} value
 * @return {String}
 * @description 格式化时间
 * */
export const formatDate = (value) => {
  const date = value ? (new Date(value.replace(/-/g, '/'))) : (new Date())
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * @description 过滤时间
 * @return {String}
 **/
export const formatDateTime = (value) => {
  const date = value ? (new Date(value.replace(/-/g, '/'))) : (new Date())
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0')
  const hours = date
    .getHours()
    .toString()
    .padStart(2, '0')
  const minutes = date
    .getMinutes()
    .toString()
    .padStart(2, '0')
  const seconds = date
    .getSeconds()
    .toString()
    .padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * @param value
 * @return {Boolean}
 * @description 判断是否为空
 * */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
