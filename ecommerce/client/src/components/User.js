import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components


import UserPurchase from './UserPurchase';


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class User extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
        
            <div className="container" id="main">
                <h1> Online Vegetable Shop - Client Screen </h1>
                    <UserPurchase userName={this.props.match.params.usrName} />  
        <br/>    
            </div>
        </ApolloProvider>
    );
  }
}

export default User;