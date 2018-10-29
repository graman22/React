import { gql } from 'apollo-boost';


const getUsersQuery = gql`
    {
        users {
            name
            id
            is_admin
        }
    }
`;


const getVegetableQuery = gql`
{
    vegetable {
        name
        id
        price
        description
    }
}
`;


const getVegetablesQuery = gql`
{
    vegetables {
        name
        id
        price
        description
    }
}
`;

const addVegetableMutation = gql`
    mutation AddVegetable($name: String!, $price: Float!,$description: String){
        addVegetable(name: $name, price: $price, description: $description){
            name
            id
            price
            description
        }
    }
`;

const purchaseMutation = gql`
    mutation Purchase($uid: String!, $vid: String!,$quantity: Float!,$totprice: Float!){
        purchase(uid: $uid, vid: $vid,quantity:$quantity ,totprice: $totprice){
            uid
            vid
            quantity
            totprice
        }
    }
`;

//export { getUsersQuery, getVegetablesQuery, addBookMutation, getBookQuery };

export { getVegetablesQuery, addVegetableMutation, purchaseMutation, getUsersQuery,getVegetableQuery };

