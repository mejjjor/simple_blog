import React from 'react'
import { fetchPost } from '../actions'
import Post from '../components/Post'
import { connect } from 'react-redux'

class PostContainer extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchPost(this.props.params.id))
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