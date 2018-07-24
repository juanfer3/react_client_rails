import axios from 'axios';

// const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
const URL = 'http://localhost:3000/';
const api= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzI3NDQ0MDAsInN1YiI6Mn0.bMahhdJUZQj0GwdKevfk9SCMT3w-kKNRyLYkg6UPu78'


console.log(token);

const token = localStorage.getItem('token')

function configHeaders(){
    const my_token = localStorage.getItem('token')
    return config = {
        headers: {
            'Content-Type': 'application/json',
           // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzI3NDQ0MDAsInN1YiI6Mn0.bMahhdJUZQj0GwdKevfk9SCMT3w-kKNRyLYkg6UPu78'
           'Authorization': 'Bearer ' + my_token
        }
      };
}

var config = {
    headers: {
        'Content-Type': 'application/json',
       // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzI3NDQ0MDAsInN1YiI6Mn0.bMahhdJUZQj0GwdKevfk9SCMT3w-kKNRyLYkg6UPu78'
       'Authorization': 'Bearer ' + token
    }
  };

function login(auth) {
    
    return axios.post(URL + '/user_token', {auth: auth}, config)
        .then(function(response){
            console.log(response.status);
            console.log(response.data.jwt);

            if (response.status == 201) {
                console.log('Correcto');
                localStorage.setItem('token', response.data.jwt)
                localStorage.setItem('email', auth.email)
                
            } 



            return response.status
        })
        
}

function logout() {

    console.log('Logout');
    
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    return true
}

function Authorizado(){
    //localStorage.removeItem('token')
   // localStorage.setItem('token', api)
    const my_config = configHeaders();
   
    return axios.get(URL + 'auth', my_config)
        .then(function(response){
            console.log(response);
            
            return response.data
        })
}
  

function getPost() {
    return    axios.get(URL + '/posts', config)
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

export {
    Authorizado, 
    login, 
    logout,
    getPost, 
    newPost, 
    deletePost}