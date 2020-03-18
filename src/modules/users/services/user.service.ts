import User from '@modules/users/types/user'

const getUsers = async function(): Promise<User[]> {
  return [
    {
      id: 1,
      firstName: 'Michael',
      lastName: 'Jackson',
      email: 'michael.jackson@heaven.com'
    },
    {
      id: 2,
      firstName: 'Joel',
      lastName: 'Santana',
      email: 'joel.santana@fisk.com.br'
    }
  ]
}

const sayHello = async function({ name }): Promise<string> {
  return `Hello ${name}`
}

const getUserByUsername = async function(username): Promise<User> {
  return {
    id: 1,
    firstName: 'Michael',
    lastName: 'Jackson',
    email: 'michael.jackson@heaven.com',
    password: '$2b$10$YSBsjc7QlidPRcu69KydK.Wja0RaEoSmTDIUKjbUZnMwZ8siUKijm'
  }
}

export { getUsers, sayHello, getUserByUsername }
