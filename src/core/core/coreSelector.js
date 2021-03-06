export const getCoreData = (state) => {
  return state.core.data
}

export const getCoreQuery = (props) => {
  const { filter } = props.location.query
  return filter
}

export const getCoreFilter = (state, props) => {
  const core = getCoreData(state)
  const filter = getCoreQuery(props)

  switch (filter) {
    case 'active':
      return core.filter(item => !item.completed);

    case 'completed':
      return core.filter(item => item.completed);

    default:
      return core;
  }
}
