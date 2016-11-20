import React from 'react'
import { setFilterPosts } from '../actions'
import FilterContainer from './FilterContainer'
import PostsContainer from './PostsContainer'

export default class App extends React.Component {
	render(){
		return (
			<div>
				<FilterContainer applyTo={setFilterPosts}/>
				<PostsContainer />
			</div>

		)
	}
}