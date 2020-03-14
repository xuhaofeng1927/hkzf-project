import React from 'react';
import { Carousel, Flex } from 'antd-mobile';
// 引入基础地址
import { BASE_URL } from '../../../untils/request'
// 引入首页需要的接口
import { getSwiper } from '../../../api/home'
// 引入首页需要的数据
import { navs } from '../../../untils/homeItems'
// 引入样式
// import './index.css'
import './index.scss'
class Default extends React.Component {
  state = {
    // 轮播图数据
    CarouselList: [],
    // 轮播图占位
    imgHeight: 176,
    // 自动播放开关
    autoplay: false
  }
  // 获取轮播图数据
  getCarousel = async () => {
    const { status, data } = await getSwiper()
    if (status === 200) {
      this.setState({
        CarouselList: data
      }, () => {
        this.setState({
          autoplay: true
        })
      });
    }
  }

  componentDidMount() {
    // 获取轮播图数据
    this.getCarousel()
  }
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
  // 栏目导航试图渲染
  navData = () => {
    return navs.map(Item => {
      return (
        <Flex.Item onClick={() => this.props.history.push(Item.path)
        } key={Item.id}>
          <img src={Item.img} alt={Item.title} />
          <p>{Item.title}</p>
        </Flex.Item>
      )
    })
  }
  render() {
    return (
      <div className="home">
        {/* 轮播图 */}
        <Carousel
          // 自动播放控制
          autoplay={this.state.autoplay}
          //循环播放
          infinite
        >
          {this.carouselData()}
        </Carousel>

        {/* 栏目导航 */}
        <Flex className="nav">
          {this.navData()}
        </Flex>

        {/* 租房小组 */}
        <div className="group">
          <Flex className="group-title" justify="between">
            <h3>租房小组</h3>
            <span>更多</span>
          </Flex>
        </div>
      </div>
    )
  }
}
export default Default

