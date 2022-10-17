import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Photo from './components/Photo/Photo';
import Profile from './screens/Profile/Profile';

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
		<div className="App">
			<NavBar />
			{/* <Photo /> */}
			<Profile />
		</div>
	);
}

export default App;
