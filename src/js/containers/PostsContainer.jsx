import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { fetchPosts,setFilterPosts } from '../actions'
import Posts from '../components/Posts'
import { connect } from 'react-redux'

class PostsContainer extends React.Component {

	constructor(props) {
		super(props);
		this.setFilter = this.setFilter.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchPosts())
	}

	setFilter(event){
		this.props.dispatch(setFilterPosts(event.target.value))
	}

	render(){
		return (
			<div>
				<form className="pure-form">
					<label>Search : </label>
					<input type='text' onChange={this.setFilter}/>
				</form>
				<Posts posts={this.props.posts} query={this.props.query}/>
			</div>
		)
	}
}

const mapStateToProps = (state,ownProps) => {
	return state
}

export default connect(mapStateToProps)(PostsContainer)