import React from 'react'
import { Link } from 'react-router'
import PostContent from './PostContent'
import User from './User'
import Comments from './Comments'

export default class Post extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<div>
			<Link to='/'>Sommaire !</Link>
			<PostContent post={this.props.post.postContent}/>
			<User user={this.props.post.user}/>
			<Comments comments={this.props.post.comments}/>
		</div>
		)
	}
}
	