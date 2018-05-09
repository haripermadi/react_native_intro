import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import cardReducers from './Cards/card.reducers'
import cardDetailReducers from './Cards/card.Detailreducers'

const reducers = combineReducers({
  cards: cardReducers,
  cardDetail: cardDetailReducers
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store