import React from 'react';
import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import NotFound from './pages/Fn404'
// import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router className="app">
      {/* 一级路由导航 */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/cityList" component={CityList} />
          <Route path="/map" component={Map} />
          {/* 404页面 */}
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
