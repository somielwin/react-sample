import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';


// export default [
// 	{
// 		..Home,
// 		path: '/',
// 		exact: true
// 	},
// 	{
// 		..About,
// 		path: '/about',
// 		exact: true
// 	}
// ];


export default () => {

	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/hi" component={() => 'Hi'} />
		</div>
	)
}