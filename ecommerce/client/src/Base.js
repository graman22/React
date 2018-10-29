import React from 'react';
import { HashRouter, Switch, Route,Link} from 'react-router-dom';
import Home from './home';
import Admin from './components/Admin';
import User from './components/User';
import UserInfo from './components/UserInfo';

const Base = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
	  <Route exact path="/UserInfo/:userType" component={UserInfo}/> 
	  <Route exact path="/Admin/:admin_usrName" component={Admin}/>	  // admin.js
	  <Route exact path="/User/:usrName" component={User}/>	  // user.js 
    </Switch>
  </HashRouter>
)


export default Base;


// <Route exact path="/Normal_User" component={}/> 
//<Route exact path="/User" component={AdminUser}/>	