import User from './types/user'
import { getUsers, sayHello } from './services/user.service'

const resolvers = {
  async users(data, context): Promise<Array<User>> {
    return await getUsers()
  },
  async sayHello({ name }) {
    return await sayHello(name)
  }
}

export default resolvers
