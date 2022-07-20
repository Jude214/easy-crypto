import server from 'rollup-plugin-serve'
import clear from 'rollup-plugin-clear'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')

export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'CJS',
      exports: 'default'
    }, {
      file: 'dist/easy-jsencrypt.if.js',
      format: 'iife',
      name: 'EasyEncrypt'
    }, {
      file: 'dist/easy-jsencrypt.global.js',
      format: 'umd',
      name: 'EasyEncrypt'
    }, {
      file: 'dist/easy-jsencrypt.es.js',
      format: 'es',
      name: 'ES'
    }
  ],
  external: ['js-base64', 'jsencrypt'],
  plugins: [
    clear({
      targets: ['dist'], // 每次打包清空dist目录
      watch: true
    }),
    terser(),
    server({
      contentBase: './',
      host: 'localhost',
      port: 36000,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      open: true,
      openPage: '/example/test.html'
    })
  ]
}