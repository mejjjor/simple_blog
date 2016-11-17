import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Posts from './components/Posts'
import Post from './components/Post'

import "../css/main.css"

const main = document.createElement('main')
const body = document.getElementsByTagName('body')[0]
body.insertBefore(main,body.firstChild)


render((
  <Router history={hashHistory}>
	<Route path="/" component={Posts}/>
	<Route path="post/:postId" component={Post}/>
	<Route path="*" component={Posts}/>
  </Router>
), main)


