import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
 
export default(req) => {

	// boot up location
	const content = renderToString(
		<StaticRouter location={req.path} conten={{}}>
			<Routes />
		</StaticRouter>
	);

	return `
		<html>
			<head>
				 <meta charset="utf-8">
			    <meta http-equiv="x-ua-compatible" content="ie=edge">
			    <link rel="shortcut icon" href="/frontend/images/favicon.ico">
			    <meta name="robots" content="index, follow">

			    <title>React | Sample</title>
			    <meta name="description" content="">
			    <link rel="canonical" href="">

			    <meta property="og:title" content="">
			    <meta property="og:description" content="">
			    <meta property="og:image" content="">

			    <meta name="twitter:card" content="">
			    <meta name="twitter:site" content="">

			    <meta name="twitter:title" content="">
			    <meta name="twitter:description" content="">
			    <meta property="twitter:image" content="">

			    <meta property="og:site_name" content="">
			    <meta property="og:type" content="">
			    <meta property="og:url" content="">


			    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
			</head>
			<body>
				<div id="root">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
}