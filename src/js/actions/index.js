import axios from 'axios'
import { hashHistory } from 'react-router'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const SET_FILTER_POSTS = 'SET_FILTER_POSTS'
export const CLEAN_POST = 'CLEAN_POST'



const urlBaseApi = 'https://jsonplaceholder.typicode.com/'

function getPosts(posts){
	return {
		type:GET_POSTS,
		posts
	}
}

function getPost(post){
	return {
		type:GET_POST,
		post
	}
}

function cleanPost(){
	return {
		type:CLEAN_POST
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
			console.log(error)
		})
	}
}

export const fetchPost = (postId,previousId) => {
	return async function (dispatch) {
		if (postId != previousId)
			dispatch(cleanPost())
		try{
			const post = await axios.get(`${urlBaseApi}posts/${postId}`)
			const comments = await axios.get(`${urlBaseApi}comments?postId=${postId}`)
			const user = await axios.get(`${urlBaseApi}users/${post.data.userId}`)
			
			dispatch(getPost({postContent: post.data, comments:comments.data, user:user.data}))
		}catch(error){
			console.log(error)
			hashHistory.push('/')
		}
	} 
}

