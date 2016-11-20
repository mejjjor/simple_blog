import React from 'react'

export default class Filter extends React.Component {

	render(){
		return (
			<form className="pure-form content">
				<label>Search : </label>
				<input type='text' onChange={this.props.onChange}/>
			</form>
		)
	}
}
