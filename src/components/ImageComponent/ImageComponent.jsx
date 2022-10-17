import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

import './index.css';
import Photo from '../Photo/Photo';

function ImageComponent(props) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const truncate = (input) => (input?.length > 50 ? `${input.substring(0, 45)}...` : input);

	return (
		<div>
			<div onClick={handleOpen} className="image-link">
				<img className="image" src={props.image} alt="random image" />
				<div className="image-info">
					<span className="image-description">{truncate(props.description)} </span>
					<span className="image-date">{props.date}</span>
				</div>
			</div>
			<Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Photo image={props.image} description={props.description} date={props.date} close={handleClose} />
			</Modal>
		</div>
	);
}

export default ImageComponent;
