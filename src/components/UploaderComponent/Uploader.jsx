import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Close } from '@mui/icons-material';
import { useQuery, gql } from '@apollo/client';

import './index.css';

const fileTypes = ['JPG', 'PNG', 'GIF'];

// const UPLOAD_PHOTO = gql`

// `;

function Uploader(props) {
	// const { loading, error, data } = useQuery(UPLOAD_PHOTO);
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};
	return (
		<div className="upload-container">
			<h1>Upload a photo</h1>
			<FileUploader multiple={true} handleChange={handleChange} name="file" types={fileTypes} />
			<p>{file ? `File name: ${file[0].name}` : 'no files uploaded yet'}</p>
			<div className="close-button">
				<Close onClick={props.close} />
			</div>
		</div>
	);
}

export default Uploader;
