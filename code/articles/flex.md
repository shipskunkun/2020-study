```
<div class="container">
	<div class="item item1"></div>
	<div class="item item2"></div>
	<div class="item item3"></div>
</div>

.container {
    margin:10px;
    display: flex;
    width: 500px;
    height: 200px;
    background-color: #eee;
    color: #666;
    text-align: center;
    .item {
	    height: 100px;
	    margin: 0;
	    &.item1 {
	    	width: 100px;
		    flex-grow:1;
		    background-color:#ff4466;
	    }
	    &.item2 {
	    	width: 150px;
		    flex-grow:2;
		    background-color:#42b983;
	    }
	    &.item3 {
	    	width: 100px;
    		flex-grow:3;
    		background-color:#61dafb;
	    }
	}
}
```

125px 200px 175px


去掉50% ，不是 评分？

191 + 191
173+ 209




如果没有设置flex-basis属性，那么flex-basis的大小就是项目的width属性的大小
如果没有设置width属性，那么flex-basis的大小就是项目内容(content)的大小

而当前我们的input并没有定义明确的宽度；所以参照的是默认的宽度；


Flex Items的应用准则
content –> width –> flex-basis (limted by max|min-width)
也就是说，

如果没有设置flex-basis属性，那么flex-basis的大小就是项目的width属性的大小
如果没有设置width属性，那么flex-basis的大小就是项目内容(content)的大小
下面通过给一个1000px的flex容器来添加一些flex items来说明一下Flex Items的应用准则：


所以当我们没有给 flex-basis 元素设置 width 时， flex-basis: auto 由内部的 content 决定宽度，且受 max/min-width 限制。



