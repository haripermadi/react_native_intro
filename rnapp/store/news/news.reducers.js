import {
  GET_NEWS_SUCCESS,
  GET_NEWS_PENDING,
  GET_NEWS_ERROR
} from './news.actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: false
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
    return ({
      ...state,
      data: action.payload,
      loading: false
    })
    case GET_NEWS_PENDING:
    return ({
      ...state,
      loading: true
    })
    case GET_NEWS_ERROR:
    return ({
      ...state,
      loading: false,
      error: true
    })
    default:
    return state
  }
}

export default reducers
