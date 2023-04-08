import React from 'react';
import { useQuery, gql } from '@apollo/client';

import ImageComponent from '../../components/ImageComponent/ImageComponent';
import './index.css';
import profilePic from '../../assets/me.png';

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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<div className="container">
			<div className="sidebar">
				<img src={profilePic} alt="profile picture" className="profile-pic" />
				<h2 className="title">Marcus Herrera</h2>
				<h5 className="username">@mahiv87</h5>
				<p className="bio">
					Denver based photographer. Thanks for coming! I hope you enjoy your
					stay :)
				</p>
			</div>
			<div className="gallery-container">
				<div className="gallery-column">
					<div className="image-container">
						{data &&
							data.photos.data.map((photo) => (
								<ImageComponent
									key={photo.id}
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
