import { getCoreFilter, getCoreData, getCoreQuery } from '../coreSelector'

const initialState = {
  core: {
    loading: true,
    data: [
      {
        id: 1,
        title: 'Core 101',
        completed: true
      },
      {
        id: 2,
        title: 'Core 102',
        completed: false
      }
    ]
  }
}

// Filter Data
const search = ['','active','completed']

describe('Core Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should Core Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = getCoreFilter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(recieved).toEqual(expected)
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
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
