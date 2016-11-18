import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'

function getPosts(posts){
	console.log("## Actions. getPosts")
	console.log("-> posts : ")
	console.log(posts)
	return {
		type:'GET_POSTS',
		posts
	}
}

function error(error){
	console.log("## Actions. error")
	console.log("-> error : ")
	console.log(error)
	return {
		type:'ERROR',
		error
	}
}

export const fetchPosts = () => {
	console.log("## Actions. fetchPosts")
  	return function (dispatch){
	  	return axios.get('https://jsonplaceholder.typicode.com/posts')
	  	.then((response) => {
		  	console.log("## Actions. fetchPosts callback")
		  	console.log("-> response : ")
		  	console.log(response)
		  	dispatch(getPosts(response.data))
		})
	  	.catch(function (error) {
		    console.log(error);
		    dispatch(error(error))
	  	})
  	} 
}