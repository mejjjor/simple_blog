import React from 'react'
import { Link } from 'react-router'


export default class Sidebar extends React.Component {

	render(){
		return (
			<div className='Header sidebar'>
				<Link to='/'><h1 className='brand-title'>A simple blog</h1></Link>
			</div>
		)
	}
}