import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class Posts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {posts:[],query:''}

		this.handleChange = this.handleChange.bind(this)
		this.getFilteredPosts = this.getFilteredPosts.bind(this)
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		  .then((response) => {
		    this.setState({posts:response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
	}

	getFilteredPosts(){
		return this.state.posts.map((post)=>{
			if (post.title.includes(this.state.query))
				return <h3 key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
		})
	}

	handleChange(event){
		this.setState({query:event.target.value})
	}

	render(){
		return (
		<div>
			<input type='text' value={this.state.query} onChange={this.handleChange}/>
			 { this.getFilteredPosts() }
		</div>
		)
	}
}
