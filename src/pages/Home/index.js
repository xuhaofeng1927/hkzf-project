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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  
  render() {
    return (
      <div>
        {/* <Link to="/home/index">首页</Link>
      <Link to="/home/house">找房</Link>
     <Link to="/home/profile">我的</Link> */}

        <div className="barBox">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="1"
              icon={<i className="iconfont icon-ind" />}
              selectedIcon={<i className="iconfont icon-ind" />}
              selected={this.props.location.pathname === '/home'}
              onPress={() => {
                this.props.history.push('/home')
                this.setState({
                  selectedTab: '/home',
                });
              }}
              data-seed="logId"
            >
              <Route exact path="/home" component={Index} />
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-findHouse"/>}
              selectedIcon={<i className="iconfont icon-findHouse"/>}
              title="找房"
              key="2"        
              selected={this.props.location.pathname === '/home/house'}
              onPress={() => {
                this.props.history.push('/home/house')
                this.setState({
                  selectedTab: '/home/house'
                });
              }}
              data-seed="logId1"
            >
             <Route path="/home/house" component={House} />
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my"/>}
              title="我的"
              key="3"
              dot
              selected={this.props.location.pathname === '/home/profile'}
              onPress={() => {
                this.props.history.push('/home/profile')
                this.setState({
                  selectedTab: '/home/profile',
                });
              }}
            >
              <Route path="/home/profile" component={Profile} />
            </TabBar.Item>

          </TabBar>
        </div >
      </div>
    )
  }
}
export default Home
