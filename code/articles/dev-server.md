###WebPack+ES6开发环境搭建，可以实时编译运行



步骤：安装

	sudo cnpm i webpack-dev-server -D


之前我们是通过 index.html 访问的	
现在我们可以通过本地地址访问，如  localhost:8080

webpack-dev-server 这种启动模式，会将bundle.js 加载到内存中	


1. 热更新，不需要打包，修改css 和 js 不用打包	
2. 在内存中速度快

在 package.json 中配置
	
	"dev": "webpack-dev-server"
	
升级配置


1. --open： 自动打开 
2. --port 8090：设置端口号 
3. --contentBase src： 指定默认界面 
4. --hot：指定热更新 
5. --inline：自动刷新  
6. --host：可以指定服务器的 ip，不指定则为127.0.0.1，如果对外发布则填写公网ip地址

```
"dev": "webpack-dev-server --open --port 8080 --inline"
```

过程简单理解为：

	执行dev命令后，server服务用他来启动监听 webpack.config.js, 根据webpack.config.js找到entry 即main.js，生成build.js，根据template即模板页面，把build.js添加到模板页面中
	
	
1. HtmlwebpackPlugin 这个插件可以把生成的css ,js 插入到html页中的head,body中，
2. CommonsChunkPlugin 提取公共代码，这个不需要安装，webpack集成有。
3. ExtractTextPlugin 这个插件就是开头提到的，从html中分离css的插件。npm install extract-text-webpack-plugin --save-dev


<hr>










