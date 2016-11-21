import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts,setFilterPosts } from 'actions'
import Posts from 'posts/Posts'

class PostsContainer extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchPosts())
	}

	setFilter(event){
		this.props.dispatch(setFilterPosts(event.target.value))
	}

	render(){
		return (
			<Posts posts={this.props.posts} filter={this.props.filter.query} />
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(PostsContainer)