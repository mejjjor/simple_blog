import React from 'react'
import { setFilterPosts } from 'actions'
import FilterContainer from 'containers/FilterContainer'
import PostsContainer from 'containers/PostsContainer'

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