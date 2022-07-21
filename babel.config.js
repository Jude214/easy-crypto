module.exports = {
  // 插件比预设先执行,按插件数组从前向后执行
  plugins: [
    ['transform-class-properties'],
    [
      '@babel/plugin-transform-classes',
      {
        loose: true
      }
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: { version: '3', proposals: true },
        version: '7.16.5'
      }
    ]
  ],
  // 预设数组从后向前执行
  presets: [
    [
      '@babel/preset-env',
      {
        // 目标环境配置,此处设置了则babel不再使用.browserslistrc中的配置
        // targets: 'defaults',
        /**
         * polyfill行为,未配置或为false时polfyfill全部引入最终代码里
         * entry: 需在工程入口文件手动引入polyfill,env预设会基于目标环境按需引入相关polyfill
         * usage: (7.4+)入口文件无需引入polyfill,由babel自动判断项目中用到的ES6特性API在目标环境缺失时自动引入
         */
        useBuiltIns: 'usage',
        corejs: { version: '3', proposals: true },
      }
    ]
  ]
}
