import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

import './Index.css';
import Photo from '../Photo/Photo';

function ImageComponent({ image, description, date }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const truncate = (input) =>
		input?.length > 50 ? `${input.substring(0, 45)}...` : input;

	return (
		<div>
			<div onClick={handleOpen} className="image-link">
				<img className="image" src={image} alt="random image" />
				<div className="image-info">
					<span className="image-description">{truncate(description)} </span>
					<span className="image-date">{date}</span>
				</div>
			</div>
			<Modal
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div>
					<Photo
						image={image}
						description={description}
						date={date}
						close={handleClose}
					/>
				</div>
			</Modal>
		</div>
	);
}

export default ImageComponent;
