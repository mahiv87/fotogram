import React from 'react';
import { useLocation } from 'react-router-dom';
import { CameraAlt, Camera, CalendarToday, Exposure, Label } from '@mui/icons-material';

import './index.scss';
import profilePic from '../../assets/me.png';

let date = new Date(Date.now()).toLocaleString();

const image = {
	image: `https://picsum.photos/800/1000?random=${Math.random()}`,
	description:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore reprehenderit delectus fugit tenetur maiores eligendi culpa sit earum dolores? Corporis.',
	date: `${date}`
};

function Photo(props) {
	// const location = useLocation();
	// const { from } = location.state;

	return (
		<div className="foto-container">
			<img src={image.image} alt="foto" />
			<div className="foto-side">
				<div className="user">
					<img src={profilePic} alt="user avatar" />
					<p>Marcus Herrera</p>
				</div>
				<div className="foto-info">
					<p className="foto-description">{image.description}</p>
					<div className="foto-meta">
						<p className="foto-tags">
							<Label /> <span>Landscape, Travel</span>
						</p>
						<p className="foto-camera">
							<CameraAlt /> <span>Sony a7IV</span>
						</p>
						<p className="foto-lens">
							<Camera /> <span>FE 24-105mm F4 G</span>
						</p>
						<p className="foto-exposure">
							<Exposure /> <span>24mm ƒ/8.0, 1/250s, ISO 100</span>
						</p>
						<p className="single-date">
							<CalendarToday /> <span>{image.date}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Photo;
