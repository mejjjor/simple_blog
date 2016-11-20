import { GET_POSTS, GET_POST, SET_FILTER_POSTS } from '../actions'

const initialState = {
	posts:[],
	post:{
		postContent:{
			id:'',
			title:'',
			body:''
		},
		user:{
			id:'',
			name:'',
			website:'',
			address:{
				city:''
			}
		},
		comments:[]
	},
	query:''
}

function blogApp(state = initialState, action) {
	switch (action.type) {
	case GET_POSTS:
		return Object.assign({}, state, {
			posts: action.posts,
		})
	case SET_FILTER_POSTS:
		return Object.assign({}, state, {
			query: action.query
		})
	case GET_POST:
		return Object.assign({}, state, {
			post: action.post
		})
	default:
		return state
	}
}

export default blogApp