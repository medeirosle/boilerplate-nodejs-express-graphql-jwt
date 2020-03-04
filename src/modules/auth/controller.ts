import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
import graphqlExpress from 'express-graphql'

async function createController(req: any, res: any) {
  const schemaStatic = await require('graphql-import').importSchema(
    'src/modules/auth/schema.graphql'
  )

  return {
    schema: makeExecutableSchema({ typeDefs: schemaStatic }),
    context: { req, res },
    rootValue: resolvers
  }
}

export default graphqlExpress(createController)
