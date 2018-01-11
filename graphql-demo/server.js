/**
 * @file file description here.
 * @author winstar
 * @date 2017/12/27
 */

let express = require('express');
let graphqlHTTP = require('express-graphql');
let {buildSchema} = require('graphql');

let schema = buildSchema(`
    type User {
        id: ID
        name: String
    }
    type Query {
        hello: String
        hero: User
    }
`);

let root = {
    hello: () => {
        return 'Hello world';
    },
    hero: () => {
        return {
            id: 1,
            name: 'jedi'
        }
    }
};

let app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000);
console.log('Running');
