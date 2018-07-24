import React, { Component } from 'react';

// Service Rails-Api
import {
    Authorizado
} from '../../Services/Posts_Service';



class Home extends Component {

     
    
     
    constructor(props){
        super(props)
        this.state = {
            authorizado: false
        }
       // this.userAuth = this.userAuth.bind(this)
    }
    
    userAuth(){
        console.log('UserAuth');
        
         Authorizado().then(data=>{
              const auth = data.status
                console.log(auth)
                if (auth == 200) {
                    this.state.authorizado = true
                    this.setState({
                        authorizado: this.state.authorizado
                    })
                    
                } 
            })
        
           
    }



    

    render() {
        
        
        if (this.state.authorizado === true ) {
            return(
                <div>
                    <h1>
                        Usuario Logueado    
                    </h1>    
                </div>
            )
        }

        return (
            
            <div>
                <h1>Home</h1>
                
            </div>
        );
    }

}

export default Home;