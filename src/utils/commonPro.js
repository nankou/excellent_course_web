import Vue from 'vue'
import {
  Message
} from 'element-ui'
export const errorMsg = msg => Message.error(msg)
export const successMsg = msg => Message.success(msg)

/**
 * @param string
 * @param noAddBase
 * @return {String}
 * @description 添加URL地址+自动去除第一斜杠
 * */
export const addBaseURL = (string, noAddBase) => {
  if (string && string !== '') {
    if (string.charAt(0) !== '/' && string.charAt(0) !== '\\') { string = '/' + string }
    if (string.charAt(string.length - 1) === '/') { string = string.substr(0, string.length - 1) }
    if (noAddBase === true) {
      return string
    } else {
      return process.env.VUE_APP_BASE_API + string
    }
  } else {
    return ''
  }
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

/**
 * @param html
 * @return {String}
 * @description 过滤富文本HTML标签
 * */
export const getSimpleHtml = (html) => {
  html = html.replace('↵', '123')
  const re1 = new RegExp('<.+?>', 'g') // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
  const msg = html.replace(re1, '') // 执行替换成空字符
  return msg
}

/**
 * @param {String} msg
 * @param {String} time
 * @description 报错信息不重复
 */
let errorText = ''
let isForbid = false
export const errorMessage = (msg, time = 3000) => {
  if (isForbid && msg === errorText) return
  isForbid = true
  errorMsg(msg)
  errorText = msg
  setTimeout(() => {
    isForbid = false
  }, time)
}

export const tryJSONStringify = (data) => {
  try {
    return JSON.stringify(data)
  } catch (e) {
    console.warn('JSON转化失败：', data)
    return data
  }
}

export const tryJSONParse = (data) => {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.warn('json解析失败：', data)
    return data
  }
}

/**
 * @param {string} objPath
 * @param {object} source
 * @description 尝试读取未知对象
 */
export const tryRead = (objPath, source) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('尝试读取未知对象，母对象：', source, '寻址路径：', objPath)
  }
  let successFlag = true
  const objStrArr = objPath.split('.')
  const objStr = [...objStrArr]
  objStr.shift()
  let objTemp = source
  let objTempStr = objStrArr[0] + '.'
  const objTempJSON = []
  let i
  try {
    for (i = 0; i < objStr.length; i++) {
      objTempStr += objStr[i] + '.'
      if (objTemp[objStr[i]] !== undefined) {
        objTempJSON.push(tryJSONParse(tryJSONStringify(objTemp[objStr[i]])))// 记录对象
        objTemp = objTemp[objStr[i]]
      } else {
        successFlag = false
        break
      }
    }

    if (successFlag) {
      if (process.env.NODE_ENV === 'development') {
        // console.log('解析成功了：', objTemp)
      }
      return objTemp
    } else {
      if (process.env.NODE_ENV === 'development') {
        // console.warn('↓ 对象解析失败！ ↓')
        // console.log('记录寻址对象 _ objTempJSON：', objTempJSON)
        // console.log('最终寻址路径 _ objTempStr：', objTempStr)
        // console.log('undefined:', objStr[i], '《=====》 下一个地址不能寻址:', objStr[i + 1])
        // console.log('最后成功寻址 _ objTemp：', objTemp)
        // console.warn('↑=====↑=====↑')
      }
      return undefined
    }
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

Vue.prototype.$addBaseURL = addBaseURL
Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$getSimpleHtml = getSimpleHtml
Vue.prototype.$errorMsg = errorMsg
Vue.prototype.$successMsg = successMsg
Vue.prototype.$tryRead = tryRead
