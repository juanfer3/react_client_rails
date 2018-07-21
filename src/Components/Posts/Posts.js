import React, { Component } from 'react';

//  SemanticUi Modules
import { 
    Table 
} from 'semantic-ui-react'

// Service Rails-Api
import {
    getPost,
    deletePost,
    newPost,
    Authorizado
} from '../../Services/Posts_Service';

//Component
import PostsRow from './PostsRow';
import CreatePost from './CreatePost';


class Posts extends Component {

    // Constructor
    constructor(props) {
        super(props)

        this.state = {posts: [] }
        this.createNewPost = this.createNewPost.bind(this)
        this.deleteMyPost = this.deleteMyPost.bind(this)
        this.listPosts = this.listPosts.bind(this)
    }

    
    
    componentDidMount() {
        getPost()
            .then(data => 
                this.setState({
                    posts:data
                })
            )
            this.listPosts.bind(this)
        }
// Create post function
createNewPost(myNewPost) {
    // alert(this.state.gender);
    
   const myPost = {
      title: myNewPost.title,
      description: myNewPost.description
     }
     
    //console.log(createPost);
    
    newPost(myPost)
      .then(data =>{

        this.state.posts.push(data)
        
        this.setState({posts: this.state.posts})
        
        
      

      })

      

  }

// Delete post function
deleteMyPost(myPost) {
    console.log(myPost);
    
  deletePost(myPost.id)
    .then(data=>{

       const index = this.state.posts.indexOf(myPost)
       this.state.posts.splice(index, 1)
       this.setState({posts: this.state.posts})

    })
    
}


// List  posts Function
listPosts() {
       
       /* this.state.posts.map(post=>{
            console.log(post);
            
        })*/
        return(
            this.state.posts.map( post => 
                
                <PostsRow key={post.id} post={post} deletePost={this.deleteMyPost} />
                
            )     
        )
    }


    render() {
        Authorizado()
        return (
            <div>
                <h1>Posts component</h1>
                <br/>
                <CreatePost createNewPost={this.createNewPost}/>


    <Table singleLine>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell  colSpan='3'></Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
                { this.listPosts() }
            </Table.Body>

   
  </Table>

    <br/>
    <br/>

            </div>
        );
    }
}

export default Posts;