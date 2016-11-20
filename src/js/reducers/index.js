import { GET_POSTS, SET_FILTER_POSTS } from '../actions'

const initialState = {
  posts:[],
  query:''
}

function blogApp(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
	    	return Object.assign({}, state, {
	        	posts: action.posts
	      	})
	    case SET_FILTER_POSTS:
	    	return Object.assign({}, state, {
	        	query: action.query
	      	})

	    default:
	      return state
  	}
}

export default blogApp