import React from 'react'
import { Link } from 'react-router'

export default class PostPreview extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<Link to={`/post/${this.props.post.id}`}>{this.props.post.title}</Link>
		)
	}
}