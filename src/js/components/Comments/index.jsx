import React from 'react'
import Comment from './Comment'

export default class Comments extends React.Component {
	constructor(props) {
		super(props)
	}

	mapComments(){
		return this.props.comments.map((comment)=>{
			return (<li className='no-list-stype' key={comment.id}><Comment comment={comment}/></li>)
		})
	}

	render(){
		return (
		<div>
			<h5>Comments :</h5>
			<ul>
				{this.mapComments()}
			</ul>
		</div>
		)
	}
}
	