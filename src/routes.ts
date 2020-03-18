import { get, pipe, slice } from 'lodash/fp'
import { addMiddleware } from 'graphql-add-middleware'
import graphqlExpress from 'express-graphql'
import { schema, resolvers } from './graphql'
import authGuard from '@shared/middleware/jwt.middleware'

async function createController(req: any, res: any) {
  addMiddleware(schema, async function(root, args, context, info, next) {
    const type = get('operation.operation', info)
    const operation = `${type.charAt(0).toUpperCase()}${type.slice(1)}`
    const method = get('fieldName', info)

    if (info.fieldName !== 'authenticate') {
      authGuard(context.req, context.res, next)
    }

    return await get([operation, method], root)(args, context)
  })

  return {
    schema,
    context: { req, res },
    rootValue: resolvers
  }
}

const registerModulesRoutes = function(app) {
  app.use('/graphql', graphqlExpress(createController))
}

export default registerModulesRoutes
