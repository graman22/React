const graphql = require('graphql');
const User = require('../models/users');
const Vegetable = require('../models/vegetables');
const VegUserXref = require('../models/veguserxref');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        is_admin: { type: GraphQLString }
        
        // think about reations 
        /*
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ authorId: parent.id });
            }
        }*/
    }) // end of fields
});

const VegetableType = new GraphQLObjectType({
    name: 'Vegetable',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString }
        
        // think about relations 
        /*
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ authorId: parent.id });
            }
        }*/
    }) // end of fields
});


const VegUserXrefType = new GraphQLObjectType({
    name: 'VegUserXref',
    fields: ( ) => ({
        uid: { type: GraphQLString },
        vid: { type: GraphQLString },
		quantity:{ type: GraphQLFloat },
        totprice: { type: GraphQLFloat }
    }) // end of fields
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
       
        
        
        vegetable: {
            type: VegetableType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Vegetable.findById(args.id);
            }
        },
       
         vegetableByName: {
            type: VegetableType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args){
                //console.log(parent);console.log(args);console.log(JSON.stringify(args));
                
                //return Vegetable.filter(vegetables,{name: args.name});
                //return Vegetable.findByName(args.name);
                //return Vegetable.find(JSON.parse(JSON.stringify(args)));
                
                //return Vegetable.find({"name": "potato"});
                //return Vegetable.find({name: 'potato'});
                
                let vegetables12 = Vegetable.find({})
                //console.log( Vegetable.find({}) );
                console.log(vegetables12.schema);
               // return _.filter(vegetables12, { name: args.name });
                return null;
                
                
            }
        },
        
        vegetables: {
            type: new GraphQLList(VegetableType),
            resolve(parent, args){
                return Vegetable.find({});
            }
        },
        
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return User.findById(args.id);
            }
        },
       
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        }
    }
});



const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                is_admin: { type: GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    is_admin: args.is_admin
                });
                return user.save();
            }
        },
        
        addVegetable: {
            type: VegetableType,
            args: {
                name: { type: GraphQLString },
                price: { type: GraphQLFloat },
                description:{ type: GraphQLString }
            },
            resolve(parent, args){
                let vegetable = new Vegetable({
                    name: args.name,
                    price: args.price,
                    description: args.description
                    //is_admin: args.is_admin
                });
                return vegetable.save();
            }
        },
        
        purchase:{            
             type: VegUserXrefType,
            args: {
                uid: { type: GraphQLString },
                vid: { type: GraphQLString },
                quantity:{ type: GraphQLFloat },
                totprice: { type: GraphQLFloat }
                //,description:{ type: GraphQLString }
            },
            resolve(parent, args){
                let vegUserXref = new VegUserXref({
                    uid:args.uid,
                    vid:args.vid,
                    quantity:args.quantity,
                    totprice:args.totprice
                });
                return vegUserXref.save();
            }            
        }       
        
        /*,
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }  
        }*/
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
