const formatTime = require('silly-datetime');
import store from '@/store';

/**
 * @param {String} zh
 * @param {String} en
 * @return {String}
 * @description 判断语言
 * */
export const lang = (zh = '', en = '') => {
  let language = store.getters.setting.language
  if (language === 'zh') {
    return zh
  } else {
    return en
  }
};

/**
 * @param value
 * @return {Boolean}
 * @description 判断是否为空
 * */
export const isEmpty = value => {
  return (
    value === undefined
    || value === null
    || (typeof value === "object" && Object.keys(value).length === 0)
    || (typeof value === "string" && value.trim().length === 0)
  );
};

/**
 * @param {Date} time
 * @param {String} formatStr
 * @return {String}
 * @description 格式化时间
 * */
export const formatDate = (time, formatStr = 'YYYY-MM-DD') => {
  if (!time) return '';
  return formatTime.format(time, formatStr);
};

/**
 * @param {Date} time
 * @param {String} formatStr
 * @return {String}
 * @description 格式化时间
 * */
export const formatDateTime = (time, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
  if (!time) return '';
  return formatTime.format(time, formatStr);
};

/**
 * @param {Object} target
 * @param {Object} object
 * @description target从object中取值 target <= object
 * */
export const objectEvaluate = (target, object) => {
  for (let key in target) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] instanceof Array) {
        target[key] = [...object[key]]
      } else {
        target[key] = object[key]
      }
    }
  }
};

/**
 * @param {Object} target
 * @param {Object} object
 * @description target从object反向取值，删除原来的，获取新的
 * */
export const objectExchange = (target, object) => {
  for (let key in object) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      if (object[key] instanceof Array) {
        target[key] = [...object[key]]
      } else {
        target[key] = object[key]
      }
    } else {
      delete target[key]
    }
  }
};

/**
 * @param {Object} current
 * @param {Object} original
 * @return {Object}
 * @description 从current,original中获取需要修改的对象
 * */
export const objectObtain = (current, original) => {
  let data = {};
  for (let key in current) {
    if (Object.prototype.hasOwnProperty.call(original, key)) {
      if (current[key] instanceof Array) {
        if (JSON.stringify(current[key]) !== JSON.stringify(original[key])) {
          data[key] = current[key]
        }
      } else {
        if (current[key] !== original[key]) {
          data[key] = current[key]
        }
      }
    } else {
      data[key] = current[key]
    }
  }
  return data
};

/**
 * @author xuanzai
 * @description json美化(配合pre标签使用)
 * @param {JSON|Object} json json字符串或对象
 * @param {Number} tab 空格的个数
 * @returns {JSON|Object} 返回美化好的JSON
 **/
export const jsonPretty = (json, tab = 2) => {
  try {
    if (typeof json == "object") {
      return JSON.stringify(json, null, tab)
    } else {
      return JSON.stringify(JSON.parse(json), null, tab)
    }
  } catch (e) {
    return json
  }
};

/**
 * @author 王业鹏
 * @param {Object} _this 组件this
 * @param {String|Object} key 重置对象的键
 * @param {String|Object } ref 表单的ref
 * @description 重置表单
 **/
export const resetForm = (_this, key = null, ref = 'Form') => {
  return new Promise(resolve => {
    if (key) Object.assign(_this.$data[key], _this.$options.data()[key])
    else Object.assign(_this.$data, _this.$options.data());
    if (!ref) {
      return resolve()
    }
    _this.$nextTick(() => {
      _this.$refs[ref].clearValidate();
      resolve()
    })
  })
};

/**
 * @description 深拷贝函数
 **/
export function deepClone(data) {
  const type = (obj) => {
    let toString = Object.prototype.toString;
    let map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
    return map[toString.call(obj)];
  }
  let t = type(data), o, i, ni;
  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }
  if (t === 'array') {
    for (i = 0, ni = data.length; i < ni; i++) {
      o.push(deepClone(data[i]));
    }
    return o;
  } else if (t === 'object') {
    for (i in data) {
      if (Object.prototype.hasOwnProperty.call(data, i)) {
        o[i] = deepClone(data[i]);
      }
    }
    return o;
  }
}
