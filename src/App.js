import React from 'react';
import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import Fn404 from './pages/Fn404'
// import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="app">
      {/* 一级路由导航 */}
        <Link to="/" >home</Link>
        <Link to="/cityList" >cityList</Link>
        <Link to="/map" >map</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cityList" component={CityList} />
          <Route path="/map" component={Map} />
          {/* 404页面 */}
          <Route component={Fn404} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
