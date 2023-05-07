import React from 'react';
import {
	CameraAlt,
	Camera,
	CalendarToday,
	Exposure,
	Label
} from '@mui/icons-material';

import './index.css';
import profilePic from '../../assets/me.png';

function Photo({ image, description, date, close }) {
	return (
		<div className="foto-container">
			{/* <div className="foto-side">
				<div className="user">
					<img src={profilePic} alt="user avatar" />
					<h2>Marcus Herrera</h2>
				</div>
				<div className="foto-info">
					<p className="foto-description">{description}</p>
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
							<CalendarToday /> <span>{date}</span>
						</p>
					</div>
				</div>
			</div> */}
			<img className="foto-image" src={image} alt="foto" onClick={close} />
		</div>
	);
}

export default Photo;
