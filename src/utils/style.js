// 类名设置工具
/**
 * @param {$ObjMap} obj
 * @param {string} myClassName
 * @description 增加类名。
 * */
export const addClass = (obj, myClassName) => {
  if (!hasClass(obj, myClassName)) {
    obj.className += ' ' + myClassName
  }
}

/**
 * @param {$ObjMap} obj
 * @param {string} myClassName
 * @description 判断元素中是否含有指定的class属性值，有则返回ture，无则false
 * */
export const hasClass = (obj, myClassName) => {
  const reg = new RegExp('\\b' + myClassName + '\\b')
  return reg.test(obj.className)
}

/**
 * @param {$ObjMap} obj
 * @param {string} myClassName
 * @description 删除元素中的指定class属性
 * */
export const removeClass = (obj, myClassName) => {
  if (hasClass(obj, myClassName)) {
    const reg = new RegExp('\\b' + myClassName + '\\b')
    obj.className = obj.className.replace(reg, '')
  }
}

/**
 * @param {$ObjMap} obj
 * @param {string} myClassName
 * @description 切换元素中的指定class属性，没则添加，有则删除
 * */
export const toggleClass = (obj, myClassName) => {
  if (hasClass(obj, myClassName)) {
    removeClass(obj, myClassName)
  } else {
    addClass(obj, myClassName)
  }
}

/**
 * @param {$ObjMap} obj
 * @param {string} myClassName
 * @description 读取当前显示样式（综合）
 * */
export const getStyle = (obj, myClassName) => {
  // 构建getStyle函数
  if (window.getComputedStyle) {
    // 浏览器能找到window.getComputedStyle则返回true
    return getComputedStyle(obj, null)[myClassName] // 正常浏览器方法
  } else {
    return obj.currentStyle[myClassName] // IE8的方法
  }
}
