import React from 'react';
import useFetch from '../../hooks/useFetch';

import ImageComponent from '../../components/ImageComponent/ImageComponent';
import './index.css';
import profilePic from '../../assets/me.png';

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
	},
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
	},
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
	const { loading, error, data } = useFetch('http://localhost:1337/api/photos?populate=*');
	// console.log([data]);
	let photos = [data];
	console.log(photos);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

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
						{photos &&
							photos.map((photo) => (
								<ImageComponent
									image={'http://localhost:1337' + photo.data[0].attributes.image.data.attributes.url}
									description={photo.data[0].attributes.description}
									date={photo.data[0].attributes.createdAt}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
