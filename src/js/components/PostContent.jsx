import React from 'react'

export default class PostContent extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<div>
			<h3>{this.props.post.title}</h3>
			<p>{this.props.post.body}</p>
		</div>
		)
	}
}	