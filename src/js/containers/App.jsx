import React from 'react'
import Sidebar from '../components/Sidebar'
import 'css/index.css'
import 'css/pure-min.css'

export default class App extends React.Component {
	render(){
		return (
			<div>
				<Sidebar />
				{this.props.children}
			</div>
		)
	}
}