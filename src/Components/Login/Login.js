import React, { Component } from 'react'

import {  Switch, Redirect, Route } from 'react-router-dom';

import createHistory from "history/createBrowserHistory"



import { 
    Button, 
    Checkbox, 
    Form 
} from 'semantic-ui-react'

// Service Rails-Api
import {
    login
} from '../../Services/Posts_Service';


const history = createHistory()

export default class Login extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:'',
         submitted:false
      }
      this.handleChange = this.handleChange.bind(this)
      this.loginUser = this.loginUser.bind(this)
    }

    handleChange (evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
      }

    loginUser(){
    
        console.log(this.state.email)

        const auth= {
            email: this.state.email,
            password: this.state.password
        }

      return login(auth)
            .then(data =>{
                console.log(data)

                if (data == 201) {
                   console.log('Si es Correcto');
                   this.setState({
                       submitted: true
                   })
                }

            }).catch((error) => {
                const errors = error.response.data.errors ? error.response.data.errors : {};
                errors.summary = error.response.data.message;
                
                console.log(errors);
                
              
              });
    }

  render() {

    if (this.state.submitted === true) {
        return <Redirect to={'/'} />
    }

    return (
      <div>
        <h1>Login component</h1>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>

        <Form onSubmit={this.loginUser} >

            <Form.Field>
                <label>First Name</label>
                <input 
                placeholder='Email' 
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                />
            </Form.Field>

            <Form.Field>
                <label>Last Name</label>
                <input 
                placeholder='Password' 
                type='password' 
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                />
            </Form.Field>
            
            <Button type='submit'>
                Submit  
            </Button>

        </Form>
      </div>
    )
  }
}
