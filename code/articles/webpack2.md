

```
output: {
	path: __dirname + '/build',
	filename: 'bundle.js'
}
```	
等价于：

```	
path: path.resolve(__dirname, '/build')
```

path.resolve([from...],to)

	作用：把一个路径或路径片段的序列解析为一个绝对路径。相当于执行cd操作。
path.join(path1，path2，path3.......)		

	作用：将路径片段使用特定的分隔符（window：\）连接起来形成路径，并规范化生成的路径