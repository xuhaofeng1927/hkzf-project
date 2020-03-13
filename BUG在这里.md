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
#### 2、封装方法来单独渲染数据，打印undifined或者报错
 ``` JS
 // 轮播图视图渲染
  carouselData = () => {
    return this.state.CarouselList.map(Item => (
      <a
        key={Item.id}
        href="http://www.alipay.com"
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
      >
        <img
          src={`${BASE_URL}${Item.imgSrc}`}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            //根据窗口大小事件改变高度
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
          }}
        />
      </a>
    ))
  }
```
``` JS
 <Carousel
    // 自动播放控制
    autoplay={this.state.autoplay}
    //循环播放
    infinite
  >
    {this.carouselData()}
  </Carousel>
```
解决办法 
React类组件中调用函数时必须带有Return，不然返回的就是undifined，没有数据


