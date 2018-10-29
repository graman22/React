import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import AddVegetable from './AddVegetable';
import VegetableList from './VegetableList'


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class Admin extends Component {
  render() {
      
      //console.log(this.props);      alert(this.props.match.params.admin_usrName);
      
    return (
        <ApolloProvider client={client}>
                        

            <div id="main">
                <h1> Online Vegetable Shop - Admin Screen </h1>
                    <AddVegetable />  
        <br/>
                
                <VegetableList/>
            </div>
        </ApolloProvider>
    );
  }
}

export default Admin;