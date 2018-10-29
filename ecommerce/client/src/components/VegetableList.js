import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getVegetablesQuery } from '../queries/queries';

// components
//import BookDetails from './BookDetails';

class VegetableList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayVeggies(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading available veggies...</div> );
        } else {
            return data.vegetables.map(vegetable => {
                return(
                    <li key={ vegetable.id } >{ vegetable.name }</li>
                   //onClick={ (e) => this.setState({ selected: book.id }) }
                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="book-list">
                    { this.displayVeggies() }
                </ul>
               
            </div>
        );        
    }
    //  <BookDetails bookId={ this.state.selected } />
}

export default graphql(getVegetablesQuery)(VegetableList);
