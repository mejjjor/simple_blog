import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { fetchPosts } from '../actions'
import Posts from '../components/Posts'
import { connect } from 'react-redux'

class PostsContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("## Posts_container. enter in componentDidMount and dispatch fetchPosts")
		this.props.dispatch(fetchPosts())
	}

	render(){
		console.log("## Posts_container. in render")
		console.log("-> this.props")
		console.log(this.props)
		return (
			<Posts posts={this.props.posts}/>
		)
	}
}

const mapStateToProps = (state,ownProps) => {
	console.log("## Posts_container. enter in mapStateToProps")
	console.log("-> state : ")
	console.log(state)
	console.log("-> ownProps : ")
	console.log(ownProps)
	return state
}

const mapDispatchToProps = (dispatch,ownProps) => {
	console.log("#Posts_container. enter in mapDispatchToProps")
	console.log("-> dispatch : ")
	console.log(dispatch)
	console.log("-> ownProps : ")
	console.log(ownProps)
	return {}
}

export default connect(mapStateToProps)(PostsContainer)