import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import PostsContainer from './containers/PostsContainer'
import blogApp from './reducers'
import "../css/main.css"
import "../css/pure-min.css"

const main = document.createElement('main')
const body = document.getElementsByTagName('body')[0]
body.insertBefore(main,body.firstChild)

let store = createStore(blogApp,
	applyMiddleware(thunk))

render((
	<Provider store={store}>
	  	<Router history={hashHistory}>
			<Route path="/" component={PostsContainer}/>
			<Route path="*" component={PostsContainer}/>
	  	</Router>
  	</Provider>
), main)


