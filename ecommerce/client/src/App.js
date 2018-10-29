import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components

import VegetableList from './components/VegetableList';
import AddVegetable from './components/AddVegetable';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
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
export default App;



