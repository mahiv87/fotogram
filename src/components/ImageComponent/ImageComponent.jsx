import React from 'react';

import './index.scss';

function ImageComponent(props) {
	return (
		<>
			<a href={props.image} className="image-link">
				<img className="image" src={props.image} alt="random image" />
				<div className="image-info">
					<span className="image-description">{props.description}</span>
					<span className="image-date">{props.date}</span>
				</div>
			</a>
		</>
	);
}

export default ImageComponent;
