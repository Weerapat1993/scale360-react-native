import { getTaskFilter } from '../taskSelector'

const initialState = {
  task: {
    loading: true,
    data: [
      {
        id: 1,
        title: 'Task 101',
        completed: true
      },
      {
        id: 2,
        title: 'Task 102',
        completed: false
      }
    ]
  }
}

// Filter Data
const search = ['','active','completed']

describe('Task Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should Task Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = getTaskFilter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(recieved).toEqual(expected)
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
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
