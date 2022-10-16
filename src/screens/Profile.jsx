import React from 'react';

import ImageComponent from '../components/ImageComponent/ImageComponent';
import './index.scss';
import profilePic from '../assets/me.png';

let date = new Date(Date.now()).toLocaleString();

const randomImages = [
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!1',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!2',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!3',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!4',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!5',
		date: `${date}`
	}
];

const randomImagesTwo = [
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!6',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!7',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!8',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!9',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!10',
		date: `${date}`
	}
];

const randomImagesThree = [
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!11',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!12',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!13',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/400/600?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!14',
		date: `${date}`
	},
	{
		image: `https://picsum.photos/600/400?random=${Math.random()}`,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatibus qui!15',
		date: `${date}`
	}
];

function Profile() {
	return (
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
					<div className="image-container">
						{randomImages &&
							randomImages.map((image) => (
								<ImageComponent image={image.image} description={image.description} date={image.date} />
							))}
						{randomImagesTwo &&
							randomImagesTwo.map((image) => (
								<ImageComponent image={image.image} description={image.description} date={image.date} />
							))}
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

export default Profile;
