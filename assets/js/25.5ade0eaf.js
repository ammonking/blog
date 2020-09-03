(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{599:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("本文中所用到的测试工具如下"),n("br"),s._v("\nkmci: karma + mocha + chai + istanbul"),n("br"),s._v("\n此文只涉及在vue-cli3中如何集成以上工具，不再详细介绍各个工具")])]),s._v(" "),n("h2",{attrs:{id:"mocha-chai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mocha-chai"}},[s._v("#")]),s._v(" mocha + chai")]),s._v(" "),n("p",[s._v("首先创建vue-cli3的项目")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vue create unit-test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在预设环境中选择unit-test 随后选择mocha + chai")]),s._v(" "),n("p",[s._v("之后项目就自带了vue-cli帮我们集成的mocha和chai")]),s._v(" "),n("h2",{attrs:{id:"karma"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#karma"}},[s._v("#")]),s._v(" karma")]),s._v(" "),n("h3",{attrs:{id:"_1-安装相关依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装相关依赖"}},[s._v("#")]),s._v(" 1.安装相关依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install --save-dev karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-配置karma"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置karma"}},[s._v("#")]),s._v(" 2.配置karma")]),s._v(" "),n("p",[s._v("在项目的根目录执行karma的初始化方法，生成"),n("code",[s._v("karma.conf.js")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("karma init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("初始化过程中，会有一些选项，用于生成配置文件的默认值。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Which testing framework do you want to use ?\nPress tab to list possible options. Enter to move to the next question.\n> mocha\n\nDo you want to use Require.js ?\nThis will add Require.js plugin.\nPress tab to list possible options. Enter to move to the next question.\n> no\n\nDo you want to capture any browsers automatically ?\nPress tab to list possible options. Enter empty string to move to the next question.\n> Chrome\n>\n\nWhat is the location of your source and test files ?\nYou can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".\nEnter empty string to move to the next question.\n>\n\nShould any of the files included by the previous patterns be excluded ?\nYou can use glob patterns, eg. "**/*.swp".\nEnter empty string to move to the next question.\n>\n\nDo you want Karma to watch all the files and run the tests on change ?\nPress tab to list possible options.\n> yes\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("更改生成的karma配置文件")]),s._v(" "),n("p",[s._v("添加了"),n("strong",[s._v("webpack")]),s._v("相关的配置，增加了"),n("strong",[s._v("测试文件")]),s._v("和"),n("strong",[s._v("需要预编辑的文件")]),s._v("的匹配条件式。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// Karma configuration\n// Generated on Mon Jul 01 2019 18:02:32 GMT+0800 (GMT+08:00)\nlet webpackConfig = require('@vue/cli-service/webpack.config.js')\nmodule.exports = function (config) {\n  config.set({\n    webpack: webpackConfig,\n    // base path that will be used to resolve all patterns (eg. files, exclude)\n    basePath: '',\n\n    // frameworks to use\n    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter\n    frameworks: ['mocha'],\n\n    // list of files / patterns to load in the browser\n    files: [\n      'tests/**/*.spec.js'\n    ],\n\n    // list of files / patterns to exclude\n    exclude: [\n    ],\n\n    // preprocess matching files before serving them to the browser\n    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor\n    preprocessors: {\n      '**/*.spec.js': ['webpack', 'sourcemap']\n    },\n\n    // test results reporter to use\n    // possible values: 'dots', 'progress'\n    // available reporters: https://npmjs.org/browse/keyword/karma-reporter\n    reporters: ['spec'],\n\n    // web server port\n    port: 9876,\n\n    // enable / disable colors in the output (reporters and logs)\n    colors: true,\n\n    // level of logging\n    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG\n    logLevel: config.LOG_INFO,\n\n    // enable / disable watching file and executing tests whenever any file changes\n    autoWatch: true,\n\n    // start these browsers\n    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher\n    browsers: ['ChromeHeadless'],\n\n    // Continuous Integration mode\n    // if true, Karma captures browsers, runs the tests and exits\n    singleRun: false,\n\n    // Concurrency level\n    // how many browser should be started simultaneous\n    concurrency: Infinity\n  })\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br")])]),n("h3",{attrs:{id:"_3-编写测试用例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写测试用例"}},[s._v("#")]),s._v(" 3.编写测试用例")]),s._v(" "),n("p",[s._v("理论上应为每个Vue组件分别写一个单元测试文件。测试文件名应该为“"),n("strong",[s._v("[组件名].spec.js")]),s._v("”，比如组件名为"),n("code",[s._v("HelloWorld.vue")]),s._v("，那么对应的测试文件名为"),n("code",[s._v("HelloWorld.spec.js")])]),s._v(" "),n("h3",{attrs:{id:"_4-运行测试用例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-运行测试用例"}},[s._v("#")]),s._v(" 4.运行测试用例")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("package.json")]),s._v("中添加一条script。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"test": "karma start"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后运行执行命令，开始测试。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm run test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/dikentoujing99/article/details/86686348",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),n("OutboundLink")],1),s._v(": 若遇到webpack的编译报错请参考原文解决方案")]),s._v(" "),n("h2",{attrs:{id:"istanbul"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#istanbul"}},[s._v("#")]),s._v(" istanbul")]),s._v(" "),n("h3",{attrs:{id:"_1-安装相关依赖-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装相关依赖-2"}},[s._v("#")]),s._v(" 1.安装相关依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install --save-dev babel-plugin-istanbul istanbul-instrumenter-loader nyc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-配置babel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置babel"}},[s._v("#")]),s._v(" 2.配置babel")]),s._v(" "),n("p",[s._v("babel.config.js")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  presets"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vue/app'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-plugin-istanbul'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_3-配置webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置webpack"}},[s._v("#")]),s._v(" 3.配置webpack")]),s._v(" "),n("p",[s._v("vue.config.js")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("chainWebpack")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("devtool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'istanbul'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(js|vue)$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("enforce")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'post'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'istanbul-instrumenter-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("loader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'istanbul-instrumenter-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" esModules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_4-配置nyc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置nyc"}},[s._v("#")]),s._v(" 4.配置nyc")]),s._v(" "),n("p",[s._v("nyc是istanbul的命令行工具")]),s._v(" "),n("p",[s._v("package.json")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"nyc": {\n    "check-coverage": true,\n    "per-file": true,\n    "lines": 90,\n    "statements": 90,\n    "functions": 90,\n    "branches": 90,\n    "include": [\n      "src/**/*.{js,vue}"\n    ],\n    "exclude": [\n      "src/*.js"\n    ],\n    "reporter": [\n      "text",\n      "lcov",\n      "text-summary"\n    ],\n    "extension": [\n      ".js",\n      ".vue"\n    ],\n    "cache": true,\n    "all": true\n  }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_5-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用"}},[s._v("#")]),s._v(" 5.使用")]),s._v(" "),n("ul",[n("li",[s._v("Single-run: "),n("code",[s._v("nyc vue-cli-service test:unit")])]),s._v(" "),n("li",[s._v("Watched run: "),n("code",[s._v("nodemon --exec nyc vue-cli-service test:unit")])]),s._v(" "),n("li",[s._v("add "),n("code",[s._v("coverage")]),s._v(" and "),n("code",[s._v(".nyc_output")]),s._v(" to your "),n("code",[s._v(".gitignore")]),s._v(".")]),s._v(" "),n("li",[s._v("npm install --save-dev nodemon（用于监听）")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/1363",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考issue"),n("OutboundLink")],1),s._v("：遇到的一些问题的解决方案也都来源于issue")]),s._v(" "),n("h2",{attrs:{id:"vue-test-utils"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-test-utils"}},[s._v("#")]),s._v(" Vue Test Utils")]),s._v(" "),n("p",[s._v("直接安装即可使用 "),n("code",[s._v("npm install --save-dev @vue/test-utils")])]),s._v(" "),n("h2",{attrs:{id:"相关链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/smallsunnyfox/frontend-unit-test",target:"_blank",rel:"noopener noreferrer"}},[s._v("练习项目"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://istanbul.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Istanbul官网"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000011362879#articleHeader4",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mocha中文文档"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/f200a75a15d2",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chai BDD 风格中文文档"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.chaijs.com/api/assert/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chai TDD 风格断言库"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"http://karma-runner.github.io/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Karma官网"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ElemeFE/element/tree/dev/test/unit",target:"_blank",rel:"noopener noreferrer"}},[s._v("element-ui的单元测试"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue组件的单元测试"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Testing Vue.js Applications"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);