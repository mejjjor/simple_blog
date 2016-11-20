import React from 'react'

export default class User extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
		<ul>
			<li>{this.props.user.name}</li>
			<li>{this.props.user.website}</li>
			<li>{this.props.user.address.city}</li>
		</ul>
		)
	}
}
	