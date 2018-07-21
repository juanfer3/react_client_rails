import React, { Component } from 'react';

import './App.css';

import {  Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import Login from './Components/Login/Login'

import {  Container } from 'semantic-ui-react'
import Narbar from './Components/Navbar/Narbar';


class App extends Component {
  render() {
    return (
      
      <div>
          <Narbar/>

          <Container>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route  path="/posts" component={Posts}/>
                <Route  path="/login" component={Login}/>
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
