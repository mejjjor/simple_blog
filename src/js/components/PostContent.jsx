import React from 'react'

export default class PostContent extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<p className='post'>
			{this.props.post.body}
		</p>
		)
	}
}	