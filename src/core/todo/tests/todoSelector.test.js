import { getTodoFilter } from '../todoSelector'

const initialState = {
  task: {
    loading: true,
    data: [
      {
        id: 1,
        title: 'Todo 101',
        completed: true
      },
      {
        id: 2,
        title: 'Todo 102',
        completed: false
      }
    ]
  }
}

// Filter Data
const search = ['','active','completed']

describe('Todo Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should Todo Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = getTodoFilter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(recieved).toEqual(expected)
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
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
