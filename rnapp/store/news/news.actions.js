import {
  GET_NEWS_SUCCESS,
  GET_NEWS_PENDING,
  GET_NEWS_ERROR
} from './news.actionTypes'
import axios from 'axios'

export const getNews = () => {
  return dispatch => {
    dispatch(getNewsPending())
    axios({
      method: 'get',
      url: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a7167263e26742fe9974da64454aeaeb'
    }).then(response => {
      console.log('respon getnews store',response)
      dispatch(getNewsSuccess(response.data.articles))
    }).catch(error => {
      dispatch(getNewsError())
    })
  }
}


const getNewsSuccess = (data) => ({
  type: GET_NEWS_SUCCESS,
  payload: data
})

const getNewsPending = () => ({
  type: GET_NEWS_PENDING
})

const getNewsError = () => ({
  type: GET_NEWS_ERROR
})
