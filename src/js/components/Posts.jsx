import React from 'react'
import PostPreview  from './PostPreview'
import { connect } from 'react-redux'
import { setFilterPosts } from '../actions'

 export default class Posts extends React.Component {

	mapPosts(){
		return this.props.posts.map((post)=>{
			 if (post.title.includes(this.props.query))
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