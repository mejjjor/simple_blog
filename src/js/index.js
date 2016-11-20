import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

import PostsContainer from './containers/PostsContainer'
import PostContainer from './containers/PostContainer'
import blogApp from './reducers'
import "../css/main.css"
import "../css/pure-min.css"

const main = document.createElement('main')
document.body.insertBefore(main, document.body.firstElement)

const logger = createLogger();

let store = createStore(blogApp,
	applyMiddleware(thunk,logger))

render((
	<Provider store={store}>
	  	<Router history={hashHistory}>
			<Route path="/" component={PostsContainer}/>
			<Route path="/post/:id" component={PostContainer}/>
			<Route path="*" component={PostsContainer}/>
	  	</Router>
  	</Provider>
), main)


