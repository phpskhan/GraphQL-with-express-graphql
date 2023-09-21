const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name:'user',
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLInt}
    })
});


const RootQuery = new GraphQLObjectType({
    name:'abc',
    fields:{
        myGraphqlData:{
            type: new GraphQLList(UserType),
            resolve(parent, args){
                let data = [
                    {
                        id:12,name:'KSabih',email:'ksabih@aol.com',phone:3318811416
                    },

                    {
                        id:13,name:'Sabih Khan',email:'phpskhan@gmail.com',phone:1234567890
                    }]

                    return data;
                }
            }
        }
    });

    module.exports = new GraphQLSchema({ query : RootQuery});