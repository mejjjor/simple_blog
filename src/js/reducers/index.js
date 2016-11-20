import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'
import filter from './filter'

export default combineReducers({
	posts,
	post,
	filter
})