import React from 'react'
import Comment from './Comment'

export default class Comments extends React.Component {
	constructor(props) {
		super(props)
	}

	mapComments(){
		return this.props.comments.map((comment)=>{
			return (<li key={comment.id}><Comment comment={comment}/></li>)
		})
	}

	render(){
		return (
		<ul>
			{this.mapComments()}
		</ul>
		)
	}
}
	