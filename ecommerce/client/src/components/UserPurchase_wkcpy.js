import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getVegetableQuery,getVegetablesQuery, purchaseMutation } from '../queries/queries';

class UserPurchase extends Component {    
    
    constructor(props){
        super(props);
        //this.data ={};
        this.state = {
            uid: '',
            vid: '',
            price:0.0,
            quantity:0.0,
            totprice:0.0            
        };
        
        this.veggies ={};
    }
    displayVegetables()
    {
        var data = this.props.getVegetablesQuery;
        if(data.loading){
            return( <option disabled>Loading vegetables</option> );
        } else 
        {     
            this.veggies = data.vegetables;                                             
            return data.vegetables.map(vegetable => {
                return( <option key={ vegetable.id } value={vegetable.id}>{ vegetable.name }</option>);
            });
        }
    } 
    
    
    calcTotPrice(event){
        var data = this.props.getVegetableQuery;     
        this.state.quantity = event.target.value;        
        var totPrice = this.state.quantity * this.state.price;
        this.setState({totprice:totPrice});       
    }
            
    vegchange(event){
        // console.log(this);        console.log(this.state);
       
       this.state.vid = event.target.value;        
       const result = this.veggies.filter(vegetable => vegetable.id == event.target.value);
        //alert(JSON.stringify(result[0]));        var value = result[0].price;         //alert(this.state.price);
       this.setState({price:result[0].price})   
    }
    
    submitForm(e){
        e.preventDefault()
        // use the addBookMutation
        console.log(this.state);
        this.props.purchaseMutation({
            variables: {
                uid: "5bc632ecdba66d596c1d1bf7",
                vid: this.state.vid,
                quantity:this.state.quantity,
                totprice: this.state.totprice
            }
            //,refetchQueries: [{ query: getVegetablesQuery }]
        });
        
        alert("purchase order placed sucessfully");
    }
    render(){
        return(
            <form id="add-Vegetable" onSubmit={ this.submitForm.bind(this) } >
                
                <div className="field">
                    <label>Available vegetables:</label>
                    <select onChange={this.vegchange.bind(this)} >
                        <option>available vegetables</option>
                        { this.displayVegetables() }
                    </select>
                </div>          
            
                <div className="field">
                    <label>Price:</label>
                    <label>{this.state.price} </label>
                </div>     
            
                
                <div className="field">
                    <label>quantity:</label>
                    <input type="text" onChange={this.calcTotPrice.bind(this)} />
                </div>
        
                 <div className="field">
                    <label>Total Price:</label>
                    <label>{this.state.totprice} </label>
                </div>

                            

                <button>Purchase</button>
            </form>
        );
    }
}

export default compose(
    graphql(getVegetableQuery, {name:"getVegetableQuery"}),    
    graphql(getVegetablesQuery, { name: "getVegetablesQuery" }),
    graphql(purchaseMutation, { name: "purchaseMutation" })
)(UserPurchase);
