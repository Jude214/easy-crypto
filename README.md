### easy-jsencrypt
A simple encryptor based on jsencrypt and js-base64

一个基于jsencrypt和js-base64的简易加密解密包。包内自带一对RSA公钥私钥。

简易使用：

传输方使用包的 encrypt 方法对原始数据进行加密后传输，避免敏感数据明文传输；

接收方使用包的 decrypt 方法对加密字符串或对象进行解密可得到原始数据。

### Install
```shell
$ npm install --save easy-jsencrypt
```

### Usage
## as ES6 Module
```
import easyEncrypt from 'easy-jsencrypt'
```

## node.js (commonjs)
```
const easyEncrypt = require('easy-jsencrypt')
```

## example
```
import easyEncrypt from 'easy-jsencrypt'
let test = '123456'
let cryptor = new easyEncrypt()
let encrypted = cryptor.encrypt(test)
// encrypted result like this:
// a2RFR2tZeFVZSUtNVkFsNHZHTEVrdzk0T1FJalM3SDhBTGkrdWRtSCtpRlNaeE8vNXZPZDIvZVRlN2ZTWVZVeHhvU3RSQzIrR3JzNUZTdTF5eUxGYlVTN244S0J1TVBnPT0=
let uncrypted = cryptor.decrypt(encrypted)
// decrypted result 
// 123456
```

### Compiles and minifies for production
```
npm run build
```
