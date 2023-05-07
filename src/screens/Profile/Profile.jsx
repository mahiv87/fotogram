import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

import ImageComponent from '../../components/ImageComponent/ImageComponent';
import './index.css';
import profilePic from '../../assets/me.png';
import loader from '../../assets/loader.json';

const ImageMotionComponent = motion(ImageComponent, {
	forwardMotionProps: true
});

// let date = new Date(Date.now()).toLocaleString();

// GraphQl queries
const PHOTOS = gql`
	query GetPhotos {
		photos(pagination: { limit: 100 }) {
			data {
				id
				attributes {
					description
					title
					createdAt
					image {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

function Profile() {
	const { loading, error, data } = useQuery(PHOTOS);

	if (loading)
		return (
			<div className="loader-container">
				<Player
					autoplay
					loop
					src={loader}
					style={{ height: '300px', width: '300px' }}
				/>
			</div>
		);
	// if (error) return <p>Error...</p>;

	return (
		<div className="container">
			<div className="sidebar">
				<img src={profilePic} alt="profile picture" className="profile-pic" />
				<h2 className="title">Marcus Herrera</h2>
				<h5 className="username">@mahiv87</h5>
				<p className="bio">
					Hi there 👋 I'm a hobbyist photographer based in Denver, Colorado. I'm
					passionate about capturing moments in time and have been taking photos
					for years. I find inspiration in the natural beauty of Colorado,
					particularly in the mountains and landscapes that surround me.
				</p>
			</div>
			<div className="gallery-container">
				<div className="gallery-column">
					<div className="image-container">
						{data &&
							data.photos.data.map((photo) => (
								<ImageMotionComponent
									key={photo.id}
									photoId={photo.id}
									image={
										'http://localhost:1337' +
										photo.attributes.image.data.attributes.url
									}
									description={photo.attributes.description}
									date={photo.attributes.createdAt}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
