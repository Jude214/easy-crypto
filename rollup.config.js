// import clear from 'rollup-plugin-clear'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import server from 'rollup-plugin-serve'

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
      file: 'dist/easy-jsencrypt.es.js',
      format: 'es',
      name: 'ES'
    }, {
      file: 'dist/easy-jsencrypt.global.js',
      format: 'umd',
      name: 'EasyEncrypt' // iife和umd格式下必须提供,将作为全局变量挂在Window下
    }, {
      generatedCode: { symbols: true },
      file: 'dist/easy-jsencrypt.if.js',
      format: 'iife',
      name: 'EasyEncrypt'
    }
  ],
  external: ['js-base64', 'jsencrypt'],
  plugins: [
    clear({
      targets: ['dist'], // 每次打包清空dist目录
      watch: true
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      externalHelpers: false
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