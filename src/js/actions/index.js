import axios from 'axios'
import { hashHistory } from 'react-router'

export const GET_POSTS = 'GET_POSTS'
export const SET_FILTER_POSTS = 'SET_FILTER_POSTS'



const urlBaseApi = 'https://jsonplaceholder.typicode.com/'

function getPosts(posts){
	return {
		type:GET_POSTS,
		posts
	}
}

function getPost(postData){
	return {
		type:'GET_POST',
		postData
	}
}

function error(error){
	return {
		type:'ERROR',
		error
	}
}

export const setFilterPosts = (query) => {
	return {
		type:SET_FILTER_POSTS,
		query
	}
}

export const fetchPosts = () => {
  	return  (dispatch)=>{
	  	return axios.get(`${urlBaseApi}posts`)
	  	.then((response) => {
		  	dispatch(getPosts(response.data))
		})
	  	.catch( (error) => {
		    console.log(error);
		    dispatch(error(error))
	  	})
  	} 
}

export const fetchPost = () => {
  	return async function (dispatch){
		try{
			const post = await axios.get(`${urlBaseApi}posts/${this.props.params.postId}`)
			const comments = await axios.get(`${urlBaseApi}comments?postId=${this.props.params.postId}`)
			const user = await axios.get(`${urlBaseApi}users/${post.data.userId}`)
			
			dispatch(getPost({post: post.data, comments:comments.data, user:user.data}))
		}catch(error){
				console.log(error);
				dispatch(error(error))
				hashHistory.push('/')
		}
  	} 
}

