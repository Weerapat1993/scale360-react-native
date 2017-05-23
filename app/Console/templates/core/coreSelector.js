export function get${name_pascal}Data(state) {
  return state.${name}.data
}

export function get${name_pascal}Query(props) {
  const { filter } = props.location.query
  return filter
}

export function get${name_pascal}Filter(state, props) {
  const ${name} = get${name_pascal}Data(state)
  const filter = get${name_pascal}Query(props)

  switch (filter) {
    case 'active':
      return ${name}.filter(item => !item.completed);

    case 'completed':
      return ${name}.filter(item => item.completed);

    default:
      return ${name};
  }
}
