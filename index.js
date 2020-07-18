const resolvers = require('./db/resolvers')
const typeDefs = require('./db/schema')
const {
    ApolloServer,
} = require("apollo-server");

const connectDB = require('./configs/db')


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
.listen()
.then(({
    url
}) => console.log(`Servidor listo en ${url}`))
.catch((e) => console.log(e));

connectDB()