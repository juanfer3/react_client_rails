import React, { Component } from 'react'

import { 
    Icon, 
    Label, 
    Table,
    Button,
    Modal,
    Header

} from 'semantic-ui-react'

import {
    deletePost
} from '../../Services/Posts_Service';



export default class PostsRow extends Component {
    



  componentWillReceiveProps(nextProps) {
    if (this.props.posts !== nextProps.posts) {
      this.setState({ posts: nextProps.posts})
    }
  }
  
  
  render() {



    const {posts} = this.props.post;
    const {id,title, description} = this.props.post;
    const deleteMyPost = this.props.deletePost
    
    return (    
            <Table.Row>
                <Table.Cell>
                    <Label ribbon> {title} </Label>
                </Table.Cell>
                
                <Table.Cell> 
                    {description} 
                </Table.Cell>


                <Table.Cell>

                <Button basic color='blue' icon='folder open'/>

                

                </Table.Cell>


                <Table.Cell>

                    <Button 
                    basic color='yellow' 
                    icon='edit outline' 
                    
                    >
                        
                    </Button>

                    </Table.Cell>

                <Table.Cell>

                

                
                
            <Button  
            basic color='red' 
            icon='trash alternate'
            onClick={()=>this.props.deletePost(this.props.post)}
            />
                        
               
                    
                </Table.Cell>

                
               
            </Table.Row> 
    )
  }
}
