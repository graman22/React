import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getUsersQuery,getVegetableQuery,getVegetablesQuery, purchaseMutation } from '../queries/queries';

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
       // var data = this.props.getVegetableQuery;     
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
        
        console.log(this.state);       
                
        // get the user complete details , based on name filter out as for veg change 
        
        var userName = this.props.userName;
        // get users then filter to get userid 
        
        var data = this.props.getUsersQuery;
        const filteredUser = data.users.filter(user => user.name.toUpperCase() === userName.toUpperCase())        
        var enteredUserID = filteredUser[0].id;
          
        
        this.props.purchaseMutation({
            variables: {
               // uid: "5bc632ecdba66d596c1d1bf7",
                 uid: enteredUserID,
                vid: this.state.vid,
                quantity:this.state.quantity,
                totprice: this.state.totprice
            }
            
        });
        
        alert("purchase order placed sucessfully");
    }
    render(){
        return(
		
			<div className="container">
            <form id="add-Vegetable" onSubmit={ this.submitForm.bind(this) } >
                
                <div>
                    <label>Available vegetables:</label>
                    <select onChange={this.vegchange.bind(this)} >
                        <option>--SELECT--</option>
                        { this.displayVegetables() }
                    </select>
                </div>          
            
                <div >
                    <label>Price:</label>
                    <label>{this.state.price} </label>
                </div>     
            
                <br/>
                <div >
                    <label>Quantity:</label>
                    <input type="text" onChange={this.calcTotPrice.bind(this)} />
                </div>
        
                 <div >
                    <label>Total Price:</label>
                    <label>{this.state.totprice} </label>
                </div>                  
				
				<br/>				

                <button className="submitbutton">Purchase</button>
            </form>
			</div>
        );
    }
}

export default compose(
    graphql(getUsersQuery, {name:"getUsersQuery"}),
   // graphql(getVegetableQuery, {name:"getVegetableQuery"}),    
    graphql(getVegetablesQuery, { name: "getVegetablesQuery" }),
    graphql(purchaseMutation, { name: "purchaseMutation" })
)(UserPurchase);
