import { SET_FILTER_POSTS } from '../actions'

const initialState = {
	query:''
}

export default function filter(state = initialState, action) {
	switch (action.type) {
	case SET_FILTER_POSTS:
		return Object.assign({}, state,{
			query: action.query
		})
	default:
		return state
	}
}
