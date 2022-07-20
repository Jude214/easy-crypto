import Base64 from 'js-base64'
import JSEncrypt from 'jsencrypt'

const rs = Symbol('random')
const c = (function pvk() {
  const pb = ['MFwwDQYJKoZIhvc','NAQEBBQADSwAwSA','JBALiqyanDVK5rZEd','Bzr/qYQ0ZBmhPI/wv','VDkbG4xbK0cuOlGMKUst','e9mNNS46LJjw7avytGUbAl6','kWn5G7rSuhf8CAwEAAQ=='].join('');
  const na = new Array(5);
  const nose = na.fill('-').join('');
  const bf = [[' ','N','I','G','E','B'], [' ','D','N','E']];
  const pv = [[' ','TE','A','IV','PR','A ','S','R'], [' ','IC','BL','PU']];
  const k = ['Y','E','K'].reverse().join('');
  const b = bf[0].reverse().join('');
  const e = bf[1].reverse().join('');
  const p = pv[1].reverse().join('') + k;
  const v = pv[0].reverse().join('') + k;
  const fobk = [`${nose}${b}${p}${nose}`, `${nose}${b}${v}${nose}`, `${nose}${e}${p}${nose}`, `${nose}${e}${v}${nose}`];
  const vt = ['Jjw7avytGUbAl6kWn5G7rSuhf8CAwEAAQJAVQ894nc5izmmL/hM7jNcTrcnL2a8sY1vYvpsfwMDd','mlNfmCMpXEe5KEtMaJbnsh0nwgX5IJAiEAhEbF7Wqbbvsw3HvmEUunFxbDErK2v+39Kv9oCl9ZYJE','zOWDnK1JwwrDBolAiEAyrx7HaZ9KOTwMVAMVxV1mWVDcfo2ncuV0nqhRh1uHFMCIHSKTgw73kiNiV'];
  const vf = ['T46DciFA3Fe6D+80cj2IgXP4cKQby0ufmrKZaSGEoUp2QIhAOkvBlHExo6PO3jeV48D/J+PlmJzU','CIB2BRc81QXbVnSo/FiNf1vIogSqKsymkrZVtXs7CsTmX','MIIBOgIBAAJBALiqyanDVK5rZEdBzr/qYQ0ZBmhPI/wvVDkbG4xbK0cuOlGMKUste9mNNS46L'];
  const vv = vf[2] + vt[0] + vf[0] + vt[2] + vt[1] + vf[1]
  return { z: `${fobk[0]}${pb}${fobk[2]}`, x: `${fobk[1]}${vv}${fobk[3]}` }
})()

export default class EasyEncrypt {
  constructor() {
    this.p = new.target[rs](); // base64加密前缀
    this.e = new JSEncrypt();
    this.e.setPublicKey(EasyEncrypt.$v_b);
    this.e.setPrivateKey(EasyEncrypt.$v_p);
  }

  // 静态属性
  static $v_b = c.z;
  static $v_p = c.x;
  // 静态方法(类方法)
  static [rs](e) { 
    e = e || 10;
    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhjkmnprstwxyz2345678';
    let a = t.length, r = '';
    for (let i = 0; i < e; i++) r += t.charAt(Math.floor(Math.random() * a));
    return r
  }
  be(str) {
    return Base64.Base64.encode(this.p + str)
  }
  /**
   * @abstract 加密方法,RSA加密后再base64加密,返回加密后的字符串或对象
   * @param {String|Object} opt 待加密字符串或对象
   */
  encrypt(opt) {
    const t = Object.prototype.toString.call(opt)
    if ('[object String]' === t) {
      const jsen = this.e.encrypt(opt)
      const res = this.be(jsen)
      return res
    }
    if ('[object Object]' === t) {
      let r = {}
      Object.keys(opt).forEach(k => {
        r[k] = this.be(this.e.encrypt(opt[k]))
      })
      return r
    }
    throw Error('Object to be encrypted must be String or Object.')
  }
  /**
   * @abstract 解密方法,先base64解码再RSA解密,返回解密后的字符串或对象
   * @param {String|Object} enc 已加密的字符串或对象
   * @param {Array} ks opt为对象时需解密的对象属性数组,缺省时解密所有属性字段
   */
  decrypt(enc, ks) {
    const t = Object.prototype.toString.call(enc)
    if ('[object String]' === t) {
      const baseDec = Base64.Base64.decode(enc)
      const jsenc = baseDec.replace(this.p, '')
      const jsdec = this.e.decrypt(jsenc)
      return jsdec
    }
    if ('[object Object]' === t) {
      let r = {}
      let ka = ks && ks.length > 0 ? ks : Object.keys(enc)
      ka.forEach(k => {
        if (enc[k]) {
          const n = Base64.Base64.decode(enc[k]).replace(this.p, '')
          r[k] = this.e.decrypt(n)
        }
      })
      return r
    }
    throw Error('Cryptographic object must be String or Object.')
  }
}
