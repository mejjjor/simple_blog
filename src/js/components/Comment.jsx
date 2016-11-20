import React from 'react'

export default class Comment extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<div>
			<div className='post-description'>
				<h3>{this.props.comment.name}</h3>
				<h5>{this.props.comment.email}</h5>
			</div>
			<p>{this.props.comment.body}</p>
		</div>
		)
	}
}
	