// Emulating todo records which should be returned from API backend
// in the real world.
export default [
  {
    id: 1,
    user_id: 1,
    title: 'Create awesome application!',
    done: false,
    assignee: { id: 1, name: 'John Doe' },
    comments: [
      {
        id: 1,
        text: 'comment 1',
        todo_id: 1
      },
      {
        id: 2,
        text: 'comment 2',
        todo_id: 1
      }
    ]
  },
  {
    id: 2,
    user_id: 1,
    title: 'Read the documentation',
    done: false,
    assignee: { id: 1, name: 'John Doe' },
    comments: []
  },
  {
    id: 3,
    user_id: 2,
    title: 'Star Vuex ORM repository',
    done: false,
    assignee: { id: 2, name: 'Jane Doe' },
    comments: []
  }
]
