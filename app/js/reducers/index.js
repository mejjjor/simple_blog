import { GET_POSTS } from '../actions'

const initialState = {
  posts:[]
}

function blogApp(state = initialState, action) {

	console.log("## reducers.")
	console.log("-> state : ")
	console.log(state)
	console.log("-> action : ")
	console.log(action)
	switch (action.type) {
		case GET_POSTS:
	    	return Object.assign({}, state, {
	        	posts: action.posts
	      	})
	    default:
	      return state
  	}
}

export default blogApp