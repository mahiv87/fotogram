import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Photo from './components/Photo/Photo';
import Profile from './screens/Profile/Profile';
import Footer from './components/Footer/Footer';

// apollo client
const client = new ApolloClient({
	uri: 'https://fotogram-portfolio.herokuapp.com/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				{/* <NavBar /> */}
				<Profile />
				{/* <Footer /> */}
			</div>
		</ApolloProvider>
	);
}

export default App;
