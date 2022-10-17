import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';

import './index.scss';
import Photo from '../Photo/Photo';

function ImageComponent(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<div onClick={handleOpen} className="image-link">
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Photo image={props.image} description={props.description} date={props.date} />
				</Modal>
				<img className="image" src={props.image} alt="random image" />
				<div className="image-info">
					<span className="image-description">{props.description}</span>
					<span className="image-date">{props.date}</span>
				</div>
			</div>
		</>
	);
}

export default ImageComponent;
