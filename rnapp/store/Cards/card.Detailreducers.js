import {
  GET_CARD_DETAIL_SUCCESS,
  GET_CARD_DETAIL_PENDING,
  GET_CARD_DETAIL_ERROR
} from './card.actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: false
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case GET_CARD_DETAIL_SUCCESS:
    return ({
      ...state,
      data: action.payload,
      loading: false
    })
    case GET_CARD_DETAIL_PENDING:
    return ({
      ...state,
      loading: true
    })
    case GET_CARD_DETAIL_ERROR:
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