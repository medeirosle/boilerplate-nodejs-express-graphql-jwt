import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'
import * as path from 'path'

const resolversArray = fileLoader(
  path.join(__dirname, './modules/**/resolvers.ts')
)
const typesArray = fileLoader(path.join(__dirname, './modules/**/'), {
  recursive: true,
  extensions: ['.graphql']
})
const typeDefs = mergeTypes(typesArray, { all: true })

export const resolvers = mergeResolvers(resolversArray)
export const schema = makeExecutableSchema({ typeDefs, resolvers })
