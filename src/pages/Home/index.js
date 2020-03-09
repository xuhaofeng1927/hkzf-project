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
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }
  render() {
    return (
      <div>
        {/* <Link to="/home/index">首页</Link>
      <Link to="/home/house">找房</Link>
     <Link to="/home/profile">我的</Link> */}
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/profile" component={Profile} />
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
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
              {this.renderContent('Life')}
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-findHouse"/>}
              selectedIcon={<i className="iconfont icon-findHouse"/>}
              title="找房"
              key="2"        
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent('Koubei')}
            </TabBar.Item>
            <TabBar.Item
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my"/>}
              title="我的"
              key="3"
              dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              {this.renderContent('Friend')}
            </TabBar.Item>

          </TabBar>
        </div >
      </div>
    )
  }
}
export default Home
