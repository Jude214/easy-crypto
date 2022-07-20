### easy-jsencrypt
A simple encryptor based on jsencrypt and js-base64

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
