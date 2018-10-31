const { readFileSync } = require("fs")
const { GraphQLServer } = require("graphql-yoga")

const resolvers = require("./schema/resolvers")
const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`, "utf8")

let options = {
  endpoint: "/graphql",
  playground: "/graphiql",
  port: 3001
}

let server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => request
})

server.start(options, ({ port }) => {
  console.log(`Listening on port ${port}`)
})
