node -v	
npm -v	


npm init 	

npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest	创建 .babelrc 文件npm install --global babel-cli

babel —version开发环境 babel创建 index.js	 内容：[1, 2, 3].map(item => item + 1);	 运行 babel index.js	
 
 
 
 开发环境 - webpack			
 npm install webpack babel-loader --save-dev			 配置 webpack.config.js	 配置 package.json 中的 scripts	 运行 npm start	http-server -p 8881  起静态服务？？