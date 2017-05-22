export function getTaskData(state) {
  return state.task.data
}

export function getTaskFilter(state, props) {
  const task = getTaskData(state)
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
