import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

import {
     Menu
 } from 'semantic-ui-react'


export default class Narbar extends Component {

    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    
    const { activeItem } = this.state

    return (

         <Menu secondary className="Nabar">
        <Menu.Item 
        as = {Link} to='/'
        name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
            
        </Menu.Item>
        <Menu.Item
          as = {Link} to='posts'
          name='posts'
          active={activeItem === 'posts'}
          onClick={this.handleItemClick}
        >
      
        </Menu.Item>
  
        <Menu.Menu position='right'>
          
          <Menu.Item
            as = {Link} to='login'
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            className="header_option"
          >
        
          </Menu.Item>
        </Menu.Menu>
      </Menu>
     
    )
  }
}
