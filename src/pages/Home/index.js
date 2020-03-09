import React from 'react'

import { Link, Route } from 'react-router-dom'

import Default from './Default'
import House from './House'
import Profile from './Profile'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home">首页</Link>
          <Link to="/home/house">房屋列表</Link>
          <Link to="/home/profile">个人中心</Link>
        </div>
        <Route exact path="/home" component={Default}/>
        <Route  path="/home/house" component={House}/>
        <Route  path="/home/profile" component={Profile}/>        
      </div>
    )
  }
}
export default Home
