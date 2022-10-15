import { useState } from 'react';

import profilePic from './assets/me.png';
import './App.css';

import ImageComponent from './components/ImageComponent';

let date = new Date(Date.now()).toLocaleString();

const randomImages = [
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	}
];

const randomImagesTwo = [
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	}
];

const randomImagesThree = [
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!',
		date: `${date}`
	}
];

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="sidebar">
					<img src={profilePic} alt="profile picture" className="profile-pic" />
					<h2 className="title">Marcus Herrera</h2>
					<h5 className="username">@mahiv87</h5>
					<p className="bio">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vel repudiandae molestiae facere optio labore
						voluptates.
					</p>
				</div>
				<div className="gallery-container">
					<div className="gallery-column">
						{randomImages &&
							randomImages.map((image) => (
								<ImageComponent image={image.image} description={image.description} date={image.date} />
							))}
					</div>
					<div className="gallery-column">
						{randomImagesTwo &&
							randomImagesTwo.map((image) => (
								<ImageComponent image={image.image} description={image.description} date={image.date} />
							))}
					</div>
					<div className="gallery-column">
						{randomImagesThree &&
							randomImagesThree.map((image) => (
								<ImageComponent image={image.image} description={image.description} date={image.date} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
