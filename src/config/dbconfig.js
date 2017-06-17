const config = {
  database: 'todo',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `${process.env.NODE_ENV}_todo.sqlite`,
    define: {
      underscore: true
    }
  }
}

export default config;