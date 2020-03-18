import User from '@modules/users/types/user'
import { getUsers, sayHello } from '@modules/users/services/user.service'

const resolvers = {
  Query: {
    async getUsers(data, context): Promise<Array<User>> {
      return await getUsers()
    }
  },
  Mutation: {
    async sayHello(data, context) {
      return await sayHello(data)
    }
  }
}

export default resolvers
