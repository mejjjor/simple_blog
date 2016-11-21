import React from 'react'

export default class PostPreview extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<h2 className='post-title'>{this.props.post.title}</h2>
		)
	}
}