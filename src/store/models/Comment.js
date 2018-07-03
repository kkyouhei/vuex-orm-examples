import { Model } from '@vuex-orm/core'
import User from './User'
import Todo from './Todo'

export default class Comment extends Model {
  static entity = 'comments'

  static fields () {
    return {
      id: this.attr(null),
      text: this.attr(''),
      todo_id: this.attr(null),
    }
  }
}
