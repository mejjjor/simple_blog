import React from 'react'
import { Link } from 'react-router'


export default class Sidebar extends React.Component {

	render(){
		return (
			<div className='Header sidebar'>
				<h1 className='brand-title'><Link to='/'>A simple blog</Link></h1>
			</div>
		)
	}
}