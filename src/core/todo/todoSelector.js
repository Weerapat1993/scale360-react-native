export function getTodoFilter(state, props) {
  const todo = state.todo.data
  const { filter } = props.location.query

  switch (filter) {
    case 'active':
      return todo.filter(item => !item.completed);

    case 'completed':
      return todo.filter(item => item.completed);

    default:
      return todo;
  }
}
