如何使用babel


### 安装过程

进入项目：	

```cd xxx	```

初始化，生成 package.json 文件（遇到需要填写的问题直接回车）：

```
npm init
```

全局安装babel-cli

```javascriptnpm install --global babel-cli

babel —version
```

安装所需的包（Babel 7）：	

```javascript
npm install --save-dev babel-core  babel-preset-es2015 babel-preset-latest	
npm install --save @babel/polyfill
```

创建 .babelrc 文件

```javascript
{
    "presets":[ "es2015" ],
    "plugins":[]
}
```开发环境 babel```javascript创建 index.js	内容：[1, 2, 3].map(item => item + 1);	运行 babel index.js	
```

将 js 目录下的所有代码编译到 dist 目录：

```javascript
//文件所在目录   转码后目录   
//把项目 src 目录下的 array.js 实时转码到 src 下的 babel.js
babel src/array.js -o src/babel.js -w
babel src/array.js -o src/babel.js --watch

```



### babel包的构成
核心包

+ babel-core: bable转译器本身，提供了babel的转译的API，如babel.transform等，用于对代码进行转译。wepack的babel的babel-loader就是调用这些API来完成转译的。
+ babylon : js的词法解析器。
+ babel-traverse : 用于对AST(abstract syntax tree)抽象语法树的遍历，主要是给plugin用
+ babel-generator : 根据AST生成 代码

其中转译过程主要分为三个阶段： parsing transforming generating	
具体过程如下：以es6转es5为例	

es6代码的输入---》babelon进行解析---》得到AST--》plugin用babel-traverse对AST树进行遍历 ---》得到新的AST树 ---》使用babel-genertor通过AST树生成es5代码。



### babel-polyfill

Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

实现上仅仅是core-js和regenerator-runtime两个包的封装

举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

安装命令如下。

	$ npm install --save babel-polyfill

###babel-runtime

功能类似babel-polyfill，一般用于library或plugin中，因为它不会污染全局作用域


### 参考

[参考1](https://www.jianshu.com/p/9d97d199992f)	
[参考2](https://www.jianshu.com/p/5c509e4473c2)	
[参考3](https://www.jianshu.com/p/789796367d47)
