import { Database } from '@vuex-orm/core'
import User from './models/User'
import users from './modules/users'
import Todo from './models/Todo'
import todos from './modules/todos'
import Comment from './models/Comment'
import comments from './modules/comemnts'

const database = new Database()

database.register(User, users)
database.register(Todo, todos)
database.register(Comment, comments)

export default database
