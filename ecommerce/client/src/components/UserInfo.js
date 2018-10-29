import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Link} from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
           username: ''            
        };      
    }    
    
     submitForm(e){
       e.preventDefault()    
         // here decide the url whether to  or purchase (user)
         // /User/:usrName
         
         // console.log(this.props);       alert(this.props.match.params.userType); 
         
         var userType = this.props.match.params.userType;         
         var url = '';
         
         if(userType == 'NormalUser'){
             
           url = '/User/' +this.state.username ;   
         }
         else{
             url = '/Admin/' +this.state.username ; 
         }       
               
         
         //alert(this.state.username);  
         //alert(url);
       this.props.history.push(url);

    }
    
  render() {
    return (
        <ApolloProvider client={client}>
		<div className="container">
        <form id="add-Vegetable" styles ="" onSubmit={ this.submitForm.bind(this) } >
            <div id="main">
        
                 <div >
                    <label>Enter the User name:</label>
                    <input type="text" onChange={ (e) => this.setState({ username: e.target.value }) }/>
                </div>
        
                 <div  >
                     <button className="submitbutton">Go</button>                        
                 </div>
        
            </div>
        </form>
		</div>
        </ApolloProvider>
    );
  }
}

export default UserInfo;

// <Link to='/Admin/${this.state.username}'><button>Go</button></Link>  
//<Link to='/Admin/test'><button>Go</button></Link>  