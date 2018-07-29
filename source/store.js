import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import Filters from './reducers/Filters'
import Playlists from './reducers/Playlists'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers(
    {
      filters: Filters,
      playlists: Playlists
    }
  ),
  composeEnhancers(
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  )
)

export default store
