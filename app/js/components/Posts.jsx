import React from 'react'
import PostPreview  from './PostPreview'

export default class Posts extends React.Component {
	constructor(props) {
		super(props)
		console.log("## Posts. enter in constructor")
		console.log("-> props : ")
		console.log(props)
	}

	mapPosts(){
		console.log("## Posts. enter in mapPosts")
		console.log("-> props : ")
		console.log(this.props)
		return this.props.posts.map((post)=>{
			return (<li key={post.id}><PostPreview post={post}/></li>)
		})
	}

	render(){
		return (
		<div >
			<button className='pure-button'>A Pure Button</button>
			<ul>
				 { this.mapPosts() }
			</ul>
		</div>
		)
	}
}