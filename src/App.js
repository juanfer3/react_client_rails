import React, { Component } from 'react';

import './App.css';

import {  Route, Switch, Redirect } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';


import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import Login from './Components/Login/Login'

import {  Container } from 'semantic-ui-react'
import Narbar from './Components/Navbar/Narbar';

const history = createHashHistory();

class App extends Component {




  render() {
    return (
      
      <div>
          <Narbar/>
       
          <Container>
            <Route history={history}>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route  path="/posts" component={Posts}/>
                <Route  path="/login" component={Login}  />
              </Switch>
              </Route>
          </Container>
          
      </div>
    );
  }
}

export default App;
