import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Photo from './components/Photo/Photo';
import Profile from './screens/Profile/Profile';

// apollo client
const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		// <Router>
		// 	<Routes>
		// 		<Route
		// 			path="/"
		// 			element={
		// 				<>
		// 					<Profile />
		// 				</>
		// 			}
		// 		/>
		// 		<Route
		// 			path="/foto"
		// 			element={
		// 				<>
		// 					<Photo />
		// 				</>
		// 			}
		// 		/>
		// 	</Routes>
		// </Router>
		<ApolloProvider client={client}>
			<div className="App">
				{/* <NavBar /> */}
				{/* <Photo /> */}
				<Profile />
			</div>
		</ApolloProvider>
	);
}

export default App;
