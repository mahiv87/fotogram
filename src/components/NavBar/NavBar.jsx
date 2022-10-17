import React, { useState } from 'react';
import { Cookie, Upload } from '@mui/icons-material';
import Modal from '@mui/material/Modal';

import './index.css';
import Uploader from '../UploaderComponent/Uploader';

function NavBar(props) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="nav-bar">
			<Cookie />
			<h1 className="title">Fotogram</h1>
			<div className="upload" onClick={handleOpen}>
				<Upload className="upload-icon" />
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Uploader close={handleClose} />
			</Modal>
		</div>
	);
}

export default NavBar;
