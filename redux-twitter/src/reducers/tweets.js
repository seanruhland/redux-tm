import { RECEIVE_TWEETS } from '../actions/tweets.js'

export default function tweets (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...actions.tweets,
      }
      default:
        return state
  }
}