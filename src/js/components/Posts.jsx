import React from 'react'
import PostPreview  from './PostPreview'

export default class Posts extends React.Component {

	mapPosts(){
		return this.props.posts.map((post)=>{
			if (post.title.includes(this.props.filter))
				return (<li className='no-list-stype post' key={post.id}><PostPreview post={post}/></li>)
		})
	}

	render(){
		return (
		<div className='content'>
			<ul>
				{ this.mapPosts() }
			</ul>
		</div>
		)
	}
}