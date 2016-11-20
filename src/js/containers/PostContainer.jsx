import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { fetchPost } from '../actions'
import Post from '../components/Post'
import { connect } from 'react-redux'

class PostsContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchPost())
	}

	render(){
		return (
			<Post post={this.props.post}/>
		)
	}
}

const mapStateToProps = (state,ownProps) => {
	return state
}


export default connect(mapStateToProps)(PostsContainer)