export function getTaskData(state) {
  return state.task.data
}

export function getTaskQuery(props) {
  const { filter } = props.location.query
  return filter
}

export function getTaskFilter(state, props) {
  const task = getTaskData(state)
  const filter = getTaskQuery(props)

  switch (filter) {
    case 'active':
      return task.filter(item => !item.completed);

    case 'completed':
      return task.filter(item => item.completed);

    default:
      return task;
  }
}
