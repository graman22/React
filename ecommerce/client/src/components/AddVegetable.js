import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {  getVegetablesQuery, addVegetableMutation } from '../queries/queries';

class AddVegetable extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            price: 0.0
        };
    }
    displayVegetables(){
        var data = this.props.getVegetablesQuery;
        if(data.loading){
            return( <option disabled>Loading vegetables</option> );
        } else {
                   //console.log(data.vegetables);
            return data.vegetables.map(vegetable => {
                return( <option key={ vegetable.id } value={vegetable.id}>{ vegetable.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()
        
        var data = this.props.getVegetablesQuery;
        if(data.loading){
            return( <option disabled>Loading vegetables</option> );
        } else
        {
           console.log(data.vegetables);        
        }
                   
        
        // use the addBookMutation
        this.props.addVegetableMutation({
            variables: {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price
            },
            refetchQueries: [{ query: getVegetablesQuery }]
        });
        
        console.log(data.vegetables);
    }
    render(){
        return(
		
		<div className="container">
            <form id="add-Vegetable" onSubmit={ this.submitForm.bind(this) } >
			
                <div className="field">
				
						<label>Vegetable name:</label>
					<input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
					
					
					
                </div>
                <div className="field">
                    <label>Description:</label>
                    <input type="text" onChange={ (e) => this.setState({ description: e.target.value }) } />
                </div>
                <div>
                    <label>Price(per kg):</label>
                    <input type="text" onChange={ (e) => this.setState({ price: e.target.value }) } />
                </div>   

<br/>

                <div > <button className="submitbutton">Add In Inventory</button> </div>
            </form>
		</div>
        );
    }
}

export default compose(
    graphql(getVegetablesQuery, { name: "getVegetablesQuery" }),
    graphql(addVegetableMutation, { name: "addVegetableMutation" })
)(AddVegetable);
