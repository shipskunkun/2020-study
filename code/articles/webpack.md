###webpack 集成 babel
 	

安装

	npm install --save-dev webpack babel-loader  --registry=http://registry.npm.taobao.org			 配置 
 
 	在根目录下创建
 	
 	webpack.config.js	
 	
 一个简单的 配置文件
 
```javascript
 module.exports = {
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		},{
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	output: {
		path: __dirname,
		filename: './build/bundle.js'
	}
}```

package.json 中的 scripts	
 		
	添加：
		"start": "webpack",
 	 运行 
 	
 	npm start	
 	// 会在 output 文件夹下生成新的文件
 	
 新建 html 文件
 
 	在 src 下 创建 index.html
 	引入 刚穿生成的 bundle.js
 	
 在浏览器中运行	
	sudo cnpm install http-server -g	http-server -p 8881  
	
	
### 答疑

1. __dirname 是什么

		注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
2. 安装中出现的问题：

 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
 
 
 ```
	npm uninstall babel-loader
	npm install babel-loader@7.1.5
```	
	
3.  淘宝镜像是什么

	解决 npm 下载太慢
	

	最顶级的使用
	
	1、安装cnpm
	
		npm i -g cnpm --registry=https://registry.npm.taobao.org
	
	2、然后就可以cnpm安装依赖包了
	
		cnpm i -g  vue vue-cli
		
	3、cnpm config ls 查看
	
		会发现里面的registry变成了淘宝的镜像（仓库）：https://registry.npm.taobao.org/n

	4、查看原始配置 npm config ls
	
		会发现里面的registry是npm原始的镜像：https://registry.npmjs.org/
	5、npm临时使用淘宝镜像安装依赖包

		npm i -g express --registry https://registry.npm.taobao.org
	6、npm持久使用淘宝镜像安装依赖包

		npm config set registry https://registry.npm.taobao.org
		npm i -g express
注意，不推荐这样子，因为把npm的镜像完全设为了淘宝的镜像，万一我们有些依赖包只有npm原始镜像里面才有，而淘宝里面没有，那就悲剧了。所以分开npm和cnpm是最好的。

	7、查看【npm 与 cnpm 是2个不同的】

		npm config ls
		cnpm config ls
		
	8、设置：主要是设置cache和prefix

		npm cofig set cache "D:\Program Files\nodejs\node_cache"
		npm cofig set prefix "D:\Program Files\nodejs\node_global"
		
		cnpm cofig set cache "D:\Program Files\nodejs\node_cache"
		cnpm cofig set prefix "D:\Program Files\nodejs\node_global"

### 参考

[参考1](https://www.jianshu.com/p/1a426b889bad)
	
	
	
	
	
	
	
	
	
	