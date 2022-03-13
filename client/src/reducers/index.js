import { combineReducers } from 'redux'

import postsReducer from './posts.js'

export default combineReducers({
    posts: postsReducer
})
