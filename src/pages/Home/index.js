import React from 'react'

import { Route } from 'react-router-dom'
// 引入组件
import { TabBar } from 'antd-mobile'
// 界面样式
import './index.css'
// 引入字体图标样式
import '../../assets/fonts/iconfont.css'

import Index from './Default'
import House from './House'
import Profile from './Profile'
// 引入导航栏数据
import tabItems from '../../untils/tabTtems' 

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.location.pathname,
      hidden: false,
      fullScreen: false,
    };
  }
  // 导航栏
  renderTabBarItem=()=> {
    return  tabItems.map((Item)=>{
      return (
      <TabBar.Item
       title={Item.title}
       key="1"
       icon={<i className={Item.icon} />}
       selectedIcon={<i className={Item.icon} />}
       selected={this.props.location.pathname === Item.path}
       onPress={() => {
         this.props.history.push(Item.path)
         this.setState({
           selectedTab: Item.path,
         });
       }}
       data-seed="logId"
     >
     </TabBar.Item>
     )
    })
  }
  render() {
    return (
      <div>
        {/* <Link to="/home/index">首页</Link>
      <Link to="/home/house">找房</Link>
     <Link to="/home/profile">我的</Link> */}
        <Route exact path='/home/' component={Index} />
        <Route exact path='/home/house' component={House} />
        <Route exact path='/home/profile' component={Profile} />
        <div className="barBox">
          {/* 导航栏 */}
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
           {this.renderTabBarItem()}
          </TabBar>
        </div >
      </div>
    )
  }
}
export default Home
