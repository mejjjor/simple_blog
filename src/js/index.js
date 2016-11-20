import  React  from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import App from './containers/App'
import PostContainer from './containers/PostContainer'
import reducers from './reducers'
import '../css/main.css'
import '../css/pure-min.css'

const main = document.createElement('main')
document.body.insertBefore(main, document.body.firstElement)

const logger = createLogger()

let store = createStore(reducers,
	applyMiddleware(thunk,logger))

render((
	<Provider store={store}>
		<Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={App}/>
			<Route path="/post/:id" component={PostContainer}/>
			<Route path="*" component={App}/>
		</Router>
	</Provider>
), main)


