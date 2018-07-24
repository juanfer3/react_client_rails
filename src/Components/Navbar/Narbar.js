import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

// Service Rails-Api
import {
  logout
} from '../../Services/Posts_Service';

import {
     Menu
 } from 'semantic-ui-react'


export default class Narbar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  logoutUser(){
    logout()
      
  }

  render() {
    
    const { activeItem } = this.state

    return (

         <Menu secondary className="Nabar">
        <Menu.Item 
        as = {Link} to='/'
        name='home' 
        color="green"
        active={activeItem === 'home'} 
        className="header_option"
        onClick={this.handleItemClick} >
            
        </Menu.Item>
        <Menu.Item
          as = {Link} to='posts'
          name='posts'
          color="green"
          active={activeItem === 'posts'}
          className="header_option"
          onClick={this.handleItemClick}
        />
      
       
  
        <Menu.Menu position='right'>
          
          <Menu.Item
            as = {Link} to='login'
            name='login'
            color="green"
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            className="header_option"
          />



           <Menu.Item
            name='logOut'
            color="green"
            active={activeItem === 'logOut'}
            onClick={this.handleItemClick}
            onClick={this.logoutUser}
            className="header_option"
          >

          
          </Menu.Item>

        </Menu.Menu>
      </Menu>
     
    )
  }
}
