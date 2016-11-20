
import { GET_POST, CLEAN_POST } from '../actions'

const initialState = {
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
}

export default function post(state = initialState, action) {
	switch (action.type) {
	case GET_POST:
		return Object.assign({}, state, action.post
		)
	case CLEAN_POST:
		return Object.assign({}, state, initialState
		)
	default:
		return state
	}
}