import React from 'react'
import Filter from '../components/Filter'
import { connect } from 'react-redux'

class FilterContainer extends React.Component {

	constructor(props) {
		super(props)
		this.setFilter = this.setFilter.bind(this)
	}

	componentDidMount() {
		this.props.dispatch(this.props.applyTo(''))
	}

	setFilter(event){
		this.setState({query:event.target.value})
		this.props.dispatch(this.props.applyTo(event.target.value))
	}

	render(){
		return (
			<Filter onChange={this.setFilter}/>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(FilterContainer)