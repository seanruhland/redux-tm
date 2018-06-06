import { combineReducers } from 'redux'
import authedUser from './authedUser.js'
import users from './users'
import tweets from './tweets'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer
})