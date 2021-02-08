import Vue from 'vue'

/**
 * 校验手机号格式
 * @param value
 * @returns {boolean}
 */
function isPhoneNo(value){
  return /^1[3|4|5|7|8][0-9]{9}$/.test(value);
}
export default function (){
  /**
   * 自定义js函数
   * @type {{isPhoneNo: (function(*=): boolean)}}
   */
  Vue.prototype.$validate={
    isPhoneNo
  }
}
