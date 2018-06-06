import { saveLikeToggle } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const TOGGLE_LIKE = 'TOGGLE_LIKE'

function toggleLike ({ authedUser, id, like }) {
  return {
    type: TOGGLE_LIKE,
    authedUser,
    id,
    like,
  }
}

export function handleToggleLike (likeData) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveLikeToggle(likeData)
      .then(() => dispatch(toggleLike(likeData)))
      .then(() => dispatch(hideLoading()))
  }
}