import React from 'react'
import PostPreview  from './PostPreview'

export default class Posts extends React.Component {

	mapPosts(){
		return this.props.posts.map((post)=>{
			if (post.title.includes(this.props.filter))
				return (<li key={post.id}><PostPreview post={post}/></li>)
		})
	}

	render(){
		return (
		<div >
			<ul>
				{ this.mapPosts() }
			</ul>
		</div>
		)
	}
}