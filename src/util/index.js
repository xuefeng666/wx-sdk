/**
 * 生成用户唯一标识码
 */
function generateUUID() {
    let uuid = '',
      d = new Date().getTime()
  
    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    
    return uuid
  }

function getCwarn() {
    let t = "object" == typeof console ? console.warn : noop;
    try {
        let e = {
            warn: t
        };
        e.warn.call(e)
    } catch (n) {
        return noop
    }
    return t
}

/**
 * encodeURIComponent 转换
 * @param {*} t 
 * @param {*} e 
 */
function encode(t, e) {
    try {
        t = e ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(t)
    } catch (n) { }
    return t
}

/**
 * 字符串替换
 * @param {*} str 
 * @param {*} find 
 * @param {*} replace 
 */
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


/**
 * @param {*} t 
 */
function ext(t) {
    for (let e = 1, n = arguments.length; e < n; e++) {
        let r = arguments[e];
        for (let o in r) {
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
    }
    return t
}

let warn = getCwarn

export default {
    ext,
    warn,
    encode,
    replaceAll,
    generateUUID
}