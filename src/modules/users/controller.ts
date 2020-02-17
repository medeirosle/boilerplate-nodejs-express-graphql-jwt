import graphqlExpress from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '@modules/users/resolvers'

async function createController(req: any, res: any) {
  const schemaStatic = await require('graphql-import').importSchema(
    'src/modules/users/schema.graphql'
  )

  return {
    schema: makeExecutableSchema({ typeDefs: schemaStatic }),
    context: { req, res },
    rootValue: resolvers
  }
}

export default graphqlExpress(createController)
