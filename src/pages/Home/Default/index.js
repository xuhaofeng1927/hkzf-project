import React from 'react';
import { Carousel } from 'antd-mobile';
import request from '../../../untils/request'

class Default extends React.Component {
  state = {
    // 轮播图数据
    CarouselList: [],
    // 轮播图占位
    imgHeight: 176,
  }
  // 获取轮播图数据
  getCarousel= async() => {
    const {data} = await request.get('/home/swiper')
    console.log(data);
    
    this.setState({
      CarouselList: data
    });
    
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
            autoplay={false}
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
                  src={`http://localhost:8080${Item.imgSrc}`}
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

