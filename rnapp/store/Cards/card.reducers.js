import {
  GET_CARDS_SUCCESS,
  GET_CARDS_PENDING,
  GET_CARDS_ERROR
} from './card.actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: false
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case GET_CARDS_SUCCESS:
    return ({
      ...state,
      data: action.payload,
      loading: false
    })
    case GET_CARDS_PENDING:
    return ({
      ...state,
      loading: true
    })
    case GET_CARDS_ERROR:
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
