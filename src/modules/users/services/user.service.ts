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

const sayHello = async function(name): Promise<string> {
  return `Hello ${name}`
}

export { getUsers, sayHello }
