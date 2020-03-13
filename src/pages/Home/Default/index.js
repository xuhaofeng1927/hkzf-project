import React from 'react';
import { Carousel } from 'antd-mobile';
// 引入基础地址
import {BASE_URL} from '../../../untils/request'
// 映入首页需要的接口
import {getSwiper} from '../../../api/home' 
class Default extends React.Component {
  state = {
    // 轮播图数据
    CarouselList: [],
    // 轮播图占位
    imgHeight: 176,
    // 自动播放开关
    autoplay:false
  }
  // 获取轮播图数据
  getCarousel= async() => {
    const {status,data} = await getSwiper()  
    if (status===200) {
      this.setState({
        CarouselList: data
      },()=>{
        this.setState({
          autoplay:true
        })
      });
    } 
    
    
  }
  componentDidMount() {
    // 获取轮播图数据
    this.getCarousel()
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
            {this.state.CarouselList.map(Item => (
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
            ))}
          </Carousel>
      </div>
    )
  }
}
export default Default

