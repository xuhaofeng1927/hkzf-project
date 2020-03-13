####  1、Unable to preventDefault inside passive event listener due to target being treated as passive
* 浏览器必须要在执行事件处理函数之后，才能知道有没有掉用过 preventDefault() ，这就导致了浏览器不能及时响应滚动，略有延迟。

* 为了让页面滚动的效果如丝般顺滑，从 **chrome56** 开始，在 window、document 和 body 上注册的 touchstart 和 touchmove 事件处理函数，会默认为是 passive: true。**浏览器忽略 preventDefault()** 就可以第一时间滚动了。
  `wnidow.addEventListener('touchmove', func, { passive: true })`

解决方案
在全局样式：`index.css`
``` CSS
* {
    touch-action: pan-y;
    /* 或者 */
    touch-action: none;
}
```
