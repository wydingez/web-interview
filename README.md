# web-interview
web前端面试知识点，便于自己复习使用，[参考文章](https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-36)`

# 可以直接github网页端调试，直接输入在项目下按下`.`即可一键抵达

## 1. js高频知识点
- 原型 / 构造函数 / 实例
- 闭包
- 原型/原型链
- 手写代码部分 （`new` / `promises` / `debounce` / `throttle` / `instanceOf`）
- 函数柯里化
- 类的声名和实例化/继承
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

for (var i in obj) {179
  console.log(i)	// a b
}

// for of  =>  遍历数组
for (var j of arr) {
  console.log(j)	// 3 5 0
}
```

## 2. css高频知识点
- 盒模型
   - 标准模型：`box-sizing: content-box` [只计算`content`的宽高]
   - IE模型：`box-sizing: border-box`  [`content` + `padding` + `border`]
- `flex` / `grid`
- 水平居中 / 垂直居中 / 水平 + 垂直居中
- `BFC`
   - 如何创建BFC
      - float的值不是none
      - position的值不是static或者relative
      - overflow的值不是visible
      - display的值是inline-block、table-cell、flex、table-caption或者inline-flex
   - BFC的作用
      - 利用BFC避免margin重叠
      - 自适应两栏布局
      - 清除浮动
- 去除浮动影响
- `html5` / `css3`
- 画一个三角形 / 品字
- 三栏布局

## 3. 浏览器
- 异步加载方式
   - 动态脚本加载
   - `defer`
   - `async`
   - `defer` 和 `async` 的区别：
      - `defer` 在`html`解析完成后执行，存在多个，按照加载顺序执行
      - `async` 是脚本执行完后立刻执行，存在多个，执行顺序与加载顺序无关
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
- 网络安全 `CSRF` / `XSS`
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

      ```js
      function bubbleSort(arr) {
         if (!arr || !arr.length) {
            return
         }

         for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < i; j++) {
               if (arr[i] < arr[j]) {
                  [arr[i], arr[j]] = [arr[j], arr[i]]
               }
            }
         }
      }
      ```

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
### 微信h5页面下，假如是长页的话用这段代码，可以在用户滑动页面时自动隐藏底部栏。
```css
.page {
    position: absolute;
    left:0;
    top:0;
    width: 100vw;
    height:100vh;
}
```
