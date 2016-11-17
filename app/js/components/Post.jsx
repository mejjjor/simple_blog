import React from 'react'
import { hashHistory, Link } from 'react-router'
import axios from 'axios'

export default class Post extends React.Component {
	constructor(props) {
		super(props)
		this.state = {post:{},comments:[],user:{address:{}}}

	}

	async componentDidMount() {
		const urlBaseApi = 'https://jsonplaceholder.typicode.com/'
		try{
			const post = await axios.get(`${urlBaseApi}posts/${this.props.params.postId}`)
			const comments = await axios.get(`${urlBaseApi}comments?postId=${this.props.params.postId}`)
			const user = await axios.get(`${urlBaseApi}users/${post.data.userId}`)
			
			this.setState({post: post.data, comments:comments.data,user:user.data})
			}catch(error){
				console.log(error);
				hashHistory.push('/')
			}
	}

	mapComments(){
		return this.state.comments.map((comment)=>{
				return <div key={comment.id}>
					<h3>{comment.name}</h3>
					<h4>{comment.email}</h4>
					<div>{comment.body}</div>
				</div>
		})
	}

	getInfos(){
		return (<div>User: 
				<div>name : {this.state.user.name}</div>
				<div>email : {this.state.user.email}</div>
				<div>city : {this.state.user.address.city}</div>
				<div>webSite : {this.state.user.website}</div>
			</div>)
	}

	render(){
		return (
		<div>
			<h3>{this.state.post.title}</h3>
			<div>{this.state.post.body}</div>
			{ this.getInfos	() }
			{ this.mapComments() }
		</div>
		)
	}
}
