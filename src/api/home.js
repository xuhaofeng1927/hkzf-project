import request from '../untils/request';

/**
 * home接口
 */
// 获取轮播图数据
export function getSwiper() {
  return request.get('/home/swiper')
}