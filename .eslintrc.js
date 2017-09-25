module.exports = {
  // extends: 'eslint:recommended',//如果有多个es版本，那么需要配对不同的eslintrc，放在extends中引入
  "env": {//定义了预定义的全局变量, 指定你想启用的环境
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 5,
    "sourceType": "module",//script、module
    "ecmaFeatures": {
      "jsx": true,
      // "experimentalObjectRestSpread": true,//es6，还在试验阶段官方不推荐
    }
  },
  "globals": {
    "$": true,//允许有$,设置每个变量等于 true 允许变量被重写，或 false 不允许被重写
  },
  "plugins": [],//第三封插件
  "rules": {
    "indent": ["warning", "tab"],//缩进以tab格式
    "linebreak-style": ["error", "unix"]//unix换行符
  }
}
