# web-interview
web前端面试知识点，便于自己复习使用，[参考文章](https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-36)

## 1. js高频知识点
- 原型 / 构造函数 / 实例
- 闭包
- 原型/原型链
- 手写代码部分 （`new` / `promises` / `debounce` / `throttle`）
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
   - **流程**：同步执行代码，依次将代码放入到调用栈中执行。遇到宏任务，将其回调函数押入宏任务队列，遇到微任务，将其押入微任务队列。然后依次取出微任务队列中的任务执行，微任务执行完后，再依次取出宏任务队列中的任务执行。
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
- `http`/`https`协议
- TCP三次握手 / TCP四次挥手
- 输入一个网址的完整流程
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
> 9.1 屏图片较多的情况下进行优化
   - 压缩图片，使用更小的格式类型图片
   - 图片懒加载
   - 使用字体图库代替图标
   - 减少网络请求（雪碧图 / svg替换图片）
