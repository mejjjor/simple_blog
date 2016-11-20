import React from 'react'
import PostContent from './PostContent'
import PostPreview from './PostPreview'
import User from './User'
import Comments from './Comments'

export default class Post extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<div className='content'>
			<PostPreview post={this.props.post.postContent}/>
			<User user={this.props.post.user}/>
			<PostContent post={this.props.post.postContent}/>
			<Comments comments={this.props.post.comments}/>
		</div>
		)
	}
}
	