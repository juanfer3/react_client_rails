import React, { Component } from 'react'

import { newPost } from '../../Services/Posts_Service';

import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'



const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
  

export default class CreatePost extends Component {

    
    

    constructor () {
        super();
        this.state = {
          title: '',
          description: '',
          gender:''
        };
        
       
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
      }

      
      


      handleChange (evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
      }

      handleChangeSelect (evt) {
        console.log(evt.target.value)
      }
      

  render() {

    

    return (
      <div>
          <h1>{this.state.title}</h1>
          <h1>{this.state.description}</h1>
        <Form>
        <Form.Group widths='equal'>
          <Form.Field 
          control={Input} label='Title' placeholder='Title' 
          value={this.state.title} name='title' 
          onChange={this.handleChange}
          />
         
         <Form.Select
          fluid label='Gender' 
          options={options}
          placeholder='Gender'
          name='gender'
          onChange={this.handleChangeSelect}
          />
        </Form.Group>
        <Form.Field control={TextArea}
         label='About' 
         placeholder='Tell us more about you...' 
         value={this.state.description}
         name='description'
         onChange={this.handleChange}
         />
          
        <h1>{this.state.gender}</h1>
        
        <Form.Field control={Button} onClick={()=>this.props.createNewPost(this.state)} >Submit</Form.Field>
      </Form>
      </div>
    )
  }
}
