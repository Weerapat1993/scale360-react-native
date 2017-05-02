import { createStore, applyMiddleware, compose } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = [thunk]
const storeEnhancer = [
	applyMiddleware(...middlewares)
]

const finalCreateStore = compose(...storeEnhancer)(createStore)

// configureMockStore for unit test
export const mockStore = configureMockStore(middlewares)

// configureStore
export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
