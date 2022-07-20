### easy-crypto
A simple encryptor based on jsencrypt and js-base64

### Install
```shell
$ npm install --save easy-crypto
```

### Usage
## as ES6 Module
```
import easyCrypto from 'easy-crypto'
```

## node.js (commonjs)
```
const easyCrypto = require('easy-crypto')
```

## example
```
import easyCrypto from 'easy-crypto'
let test = '123456'
let cryptor = new easyCrypto()
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
