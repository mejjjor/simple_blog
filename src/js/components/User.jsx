import React from 'react'

export default class User extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<ul className='no-list-stype post-description'>
			<li>by {this.props.user.name}</li>
			<li>from {this.props.user.address.city}</li>
			<li>info : <a href={this.props.user.website}>{this.props.user.website}</a></li>
		</ul>
		)
	}
}
	