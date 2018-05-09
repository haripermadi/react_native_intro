import {
  GET_CARDS_SUCCESS,
  GET_CARDS_PENDING,
  GET_CARDS_ERROR,
  GET_CARD_DETAIL_SUCCESS,
  GET_CARD_DETAIL_PENDING,
  GET_CARD_DETAIL_ERROR
} from './card.actionTypes'
import axios from 'axios'

export const getCards = () => {
  console.log('masuk action get cards!!!')
  return dispatch => {
    dispatch(getCardsPending())
    axios({
      method: 'get',
      url: 'https://api.magicthegathering.io/v1/cards'
    }).then(response => {
      console.log('respon getcards store',response)
      dispatch(getCardsSuccess(response.data.cards))
    }).catch(error => {
      dispatch(getCardsError())
    })
  }
}

export const getCardDetail = (cardId) => {
  return dispatch => {
    dispatch(getCardDetailPending())
    axios({
      method: 'get',
      url: `https://api.magicthegathering.io/v1/cards/${cardId}`
    }).then(response => {
      console.log(response)
      dispatch(getCardDetailSuccess(response.data.cards))
    }).catch(error => {
      dispatch(getCardDetailError())
    })
  }
}


const getCardsSuccess = (data) => ({
  type: GET_CARDS_SUCCESS,
  payload: data
})

const getCardsPending = () => ({
  type: GET_CARDS_PENDING
})

const getCardsError = () => ({
  type: GET_CARDS_ERROR
})

const getCardDetailSuccess = (data) => ({
  type: GET_CARD_DETAIL_SUCCESS,
  payload: data
})

const getCardDetailPending = () => ({
  type: GET_CARD_DETAIL_PENDING
})

const getCardDetailError = () => ({
  type: GET_CARD_DETAIL_ERROR
})