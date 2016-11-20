import React from 'react'
import Sidebar from '../components/Sidebar'

export default class App extends React.Component {
	render(){
		return (
			<div>
				<div className="Sidebar">
					<Sidebar />
				</div>
				<div className="Content">
					{this.props.children}
				</div>
			</div>
		)
	}
}