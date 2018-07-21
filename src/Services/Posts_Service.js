import axios from 'axios';

// const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
const URL = 'http://localhost:3000/';

var config = {
    headers: {
        'Content-Type': 'application/json'
    }
  };

function login(auth) {
    
   
    return axios.post(URL + '/user_token', {auth: auth}, config)
        .then(function(response){
            console.log(response.status);
            console.log(response.data.jwt);
            return response.data
        })
        
}
  

function getPost() {
    return    axios.get(URL + '/posts')
            .then(function(response){
                //console.log(response.data);
                return response.data;
            })
}

function newPost(posts) {
    /*
    console.log(posts);
    
    return posts*/
    
    return axios.post(URL + '/posts', posts, config)
        .then(function(response){
            //console.log(response);
            return response.data;
        })
}

function deletePost(id) {
    return axios.delete(URL + '/posts' + '/' +id)
        .then(function(response){
            console.log(response);
            return response
        })
}

export {login, getPost, newPost, deletePost}