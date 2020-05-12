# web-interview
web前端面试知识点，便于自己复习使用，[参考文章](https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-36)

## 1. js高频知识点
- 原型 / 构造函数 / 实例
- 闭包
- 原型/原型链
- 手写代码部分 （`new` / `promises` / `debounce` / `throttle` / `instanceOf`）
- 函数柯里化
- 继承
- 复用
- 改变`this`指向的三种方式：`call` / `bind` / `apply`
- 对象的拷贝：深拷贝 / 浅拷贝
- 数组：`map` / `forEach` / `filter` / `some` / `every` / `join` / `push` / `pop` / `unshift` / `shift` / `sort` / `reverse` / `concat` / `slice` / `splice` / `indexOf` / `lastIndexOf` / `reduce` / `reduceRight` / 数组乱序 / 数组扁平化
- 模块化
   - es6：`import` / `export`
   - commonjs: `require` / `module.export` / `exports`
   - amd: `require` / `defined`
- script 的引入方式
- 类型转换 / 类型判断
- 遍历对象的几种方式 & `for in` & `for of`
```javascript
var obj = {a: 1, b: 2}
var arr = [3, 5, 9]

Object.keys(obj).forEach(key => ...)
Object.values(obj).forEach(value => ...)
for (let [key, value] in Object.entries(obj)) {...}

// for in  =>  遍历数组 / 对象
for (var i in arr) {
  console.log(i)	// 0 1 2
}

for (var i in obj) {
  console.log(i)	// a b
}

// for of  =>  遍历数组
for (var j of arr) {
  console.log(j)	// 3 5 0
}
```

## 2. css高频知识点
- 盒模型
- `flex` / `grid`
- 水平居中 / 垂直居中 / 水平 + 垂直居中
- `BFC`
- 去除浮动影响
- `html5` / `css3`
- 画一个三角形 / 品字

## 3. 浏览器
- 跨标签页通信
- 浏览器架构
- 浏览器下[事件循环](https://segmentfault.com/a/1190000016278115)（`Event Loop`）
   - **流程**：执行一个宏任务，然后执行清空微任务队列，循环再执行红任务，再清微任务列表
   - 微任务`microtask jobs`：`promises` / `ajax` / `Object.observe(该方法已废弃)`
   - 宏任务`macrotask task`：`setTimeout` / `setInterval` / `script` / `IO` / `UI Rendering`
	```js
	console.log(1);

	setTimeout(() => {
	  console.log(2);
	  Promise.resolve().then(() => {
		console.log(3)
	  });
	});

	new Promise((resolve, reject) => {
	  console.log(4)
	  resolve(5)
	}).then((data) => {
	  console.log(data);
	})

	setTimeout(() => {
	  console.log(6);
	})

	console.log(7);
	```

- 存储
- `Web Worker`
- `V8`垃圾回收机制
- 内存泄露

## 4. 计算机网络相关知识点
- `http` / `https`协议
- TCP三次握手 / TCP四次挥手
- 输入一个网址的完整流程
   - DNS解析
   - TCP三次握手
   - 发送请求，分析url，设置请求报文（头/内容）
   - 服务器返回请求的文件html
   - 浏览器渲染
      - HTML解析成dom树
      - CSS解析成style树
      - 结合dom树和style树生成render树
      - layout
      - GPU painting
- 常见状态码
- `get` / `post`
- `Websocket`
- `Node`的事件循环
- 跨域
   - `JSOP`
   - 设置`CROS`：`Access-Control-Allow-Origin：*`
   - `postMessage`
- 网络安全
- 缓存：`强缓存` / `协商缓存`

## 5. vue相关
- 双向绑定原理
- 发布订阅这模式
- 深度遍历与广度遍历
- `nextTick`
- 生命周期流程
- `virtual dom`实现原理以及优势
- `Proxy` vs `Object.defineProperty`
- `vue-router`
- `vuex`

## 6. 打包工具相关
- `webpack`
- `grunt` / `gulp`

## 7. 算法
- 五大算法
   - 贪心算法
   - 分治算法
   - 动态规划
   - 回溯法
   - 分支限界法
- 排序算法 `(口诀: 插冒归基稳定，快选堆希不稳定)`
   - 基础排序算法
      - 冒泡排序
      - 选择排序
      - 插入排序
   - 高级排序算法
      - 快速排序
      - 希尔排序
- 递归（斐波那契数列）
- 数据树
   - 二叉树
   - 二叉查找树
   - 遍历节点
      - 先序遍历
      - 中序遍历
      - 后序遍历
   - 插入与删除节点
- 天平找次品
      
## 8. 其它知识点
- 自我介绍
- 准备2到3个项目中遇到的一些难题，以及自己是如果解决这些问题的
   - provide / inject 替换 多层传递参数的麻烦
   
## 9. 实战面试题目
### 9.1 山西证券
> 初试
1. 页面图片较多的情况下如何进行优化：
   - 压缩图片，使用更小的格式类型图片
   - 图片懒加载
   - 使用字体图库代替图标
   - 减少网络请求（雪碧图 / `svg`替换图片）
2. `css`居中再居中
3. `vue`的`data`为什么要用`return`对象的方式
4. 路由权限控制如何实现
5. `token`失效时，如何取消后面的请求操作（避免多个`token`超时提示重复错误信息）

> 复试
1. 介绍下`BFC`
   - 介绍：块级格式化上下文，是一个独立的渲染环境，让处于BFC内部元素与外部的元素相互隔离，使内外元素的定位不会相互影响
   - 触发条件
      - 根元素
      - position：absolute / fixed
      - display：inline-block / table
      - float元素
      - overflow != visible
   - 规则
      - 属于同一个BFC的两个相邻Box垂直排列
      - 属于同一个BFC的两个相邻Box的margin会发生重叠
      - BFC区域不会与float区域重叠
      - 计算BFC高度时，浮动子元素也会参与计算
      - 文字层不会被浮动层覆盖，环绕于周围
   - 引用
      - 阻止margin重叠
      - 可以包含浮动元素————清除内部浮动的原理是让两个div都位于同一个BFC区域之中
      - 自适应两栏布局
      - 可以阻止元素被浮动元素覆盖
2. `CSS`预处理常用的一些方法
3. `inline` / `inline-block` / `block` 之间的区别
   - `inline`
      - 不会独占一行，多个相邻的行内元素在一行，只有在一行排列不下时，才会换新的一行，宽度随元素内容而变化
      - width和height设置无效
      - margin-top / margin-bottom设置无效
   - `block`
      - 单独占一行，多个block元素会新起一行
      - 可以设置widht 和 height，但是即使设置了宽度，也还会是独占一行
      - 可以设置margin 和 padding
   - `inline-block`
      - 同时具备block的宽高特性和inline的同行特性
4. `clientHeight` / `scrollHeight` / `offsetHeight` / `offsetTop` / `scrollTop`
   - `clientHeight` 网页可见区域高度（包括padding，但不包括border、水平滚动条、margin元素的高度）
   - `scrollHeight` 网页正文全文高度
   - `offsetHeight` 网页可见区域高度（包括padding、border、水平滚动条，但不包括margin元素的高度）
   - `offsetTop` 距离最近有定位父级元素的距离 
   - `scrollTop` 有滚动条时，滚动条向下滚动的距离
      - 设置滚动条的距离的兼容性方法
      ```javascript
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      ```
5. `instanceOf`是用来干什么的？实现原理是怎么样的？
   - 用来检查某个对象是否为另外一个对象的实例
   - 实现
   ```javascript
   function instance_of (L, R) {
     var o = R.prototype
     L = L.__proto__
     while(true) {
       if (L === null) return false;
       if (O === L) return true;
       L = L.__proto__
     }
   }
   ```
6. `vue`双向绑定的实现原理（`Object.definePorterty`，观察者模式，依赖收集）
7. `ES6`常用的一些方法
8. `Promise`的三种状态，什么情况下会进入catch状态
9. 事件循环机制
10. `cookie` / `sessionStorage` / `localStorage`，这几个能跨浏览器通信吗，跨标签通信呢？
11. `webpack`的基本原理
12. 浏览器兼容常用到的方法（js / css）
13. `vue-router`常用的两种参数传递方式
      - `query`
      - `params`
14. `vue`父子组件传递参数的方式（除了常用的`props`和`$emit`，还有？）
      - `props` / `$emit`
      - `vuex` / `eventBus`
      - `$root` / `$parent` / `$children`
      - `attrs` / `listeners`
      - `provide` / `inject`
      - `$dispatch`
      - `sync`
15. 常用的状态码
      - `200 OK` 请求成功并正常返回
      - `204 No Content` 请求成功但无内容返回
      - `301 Moved Permanently` 永久性重定向
      - `302 Found` 临时性重定向
      - `304 Not Modified` Get请求成功，文件内容未发生变化
      - `400 Bad Request` 请求报文中存在语法错误
      - `401 Unauthorized` 未登录，没有权限
      - `403 Forbidden` 没有权限，禁止访问
      - `404 Not Found` 没有找到请求资源
      - `500 Inter Server Error` 服务端请求执行时发生错误
      - `503 Server Unavailable` 服务超负荷运转或者正在停机维护
