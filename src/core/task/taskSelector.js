export function getTaskFilter(state, props) {
  const task = state.task.data
  const { filter } = props.location.query

  switch (filter) {
    case 'active':
      return task.filter(item => !item.completed);

    case 'completed':
      return task.filter(item => item.completed);

    default:
      return task;
  }
}
