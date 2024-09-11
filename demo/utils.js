/**
 * 判断是否为空，如果是对象则判断是否为控对象，如果是数组则判断是否为空数组
 * @param {string | number | object | array} val
 * @returns {boolean}
 */
export function isEmpty(val) {
  return (
    [null, undefined, ''].includes(val) ||
    (Array.isArray(val) && !val.length) ||
    (Object.prototype.toString.call(val) === '[object Object]' && !Object.keys(val).length)
  );
}

/**
 * 自定义格式化金额为千分位格式
 * @param {string | number} val 需要格式化的值
 * @param {*} suffix 前缀，默认为空
 * @param {*} digit 保留小数点后几位，默认为2
 * @param {*} emptyPlaceholder 数据为空时的占位符
 * @returns {string}
 */
export function formatMoney(val, suffix = '', digit = 2, emptyPlaceholder = '-') {
  if (isEmpty(val)) return emptyPlaceholder;

  let ret = Number(val);
  if (Number.isNaN(ret)) return emptyPlaceholder;
  else ret = ret.toFixed(digit).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

  return suffix ? `${suffix} ${ret}` : ret;
}
