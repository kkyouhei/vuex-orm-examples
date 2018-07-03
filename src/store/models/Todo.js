import { Model } from '@vuex-orm/core'
import User from './User'
import Comment from './Comment'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      title: this.attr(''),
      done: this.attr(false),
      assignee: this.belongsTo(User, 'user_id'),
      comments: this.hasMany(Comment, 'todo_id')
    }
  }
}
