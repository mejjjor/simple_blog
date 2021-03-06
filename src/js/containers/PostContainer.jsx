import React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from 'actions'
import Post from 'posts/Post'

class PostContainer extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchPost(this.props.params.id,this.props.post.postContent.id))
	}

	render(){
		return (
			<Post post={this.props.post}/>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(PostContainer)