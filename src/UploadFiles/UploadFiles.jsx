import React, { useState } from 'react';
import { Button } from '@mui/material';
import './uploadFiles.css'

const UploadFiles = () => {
    const [files, setFiles] = useState({
        image: null,
        video: null,
        audio: null
    });

    const handleFileChange = (type) => (event) => {
        const file = event.target.files[0];
        if (file) {
            setFiles(prev => ({ ...prev, [type]: URL.createObjectURL(file) }));
        }
    };

    const handleFileDisplay = (type) => () => {
        const file = files[type];
        if (file) {
            window.open(file);
        }
    };

    return (
        <div className="main">
        <div className='content'>
            <div className="input">
            <input
                accept="image/*"
                type="file"
                id="image-file"
                style={{ display: 'none' }}
                onChange={handleFileChange('image')}
            />
            <label htmlFor="image-file">
                <Button variant="contained" component="span">
                    Upload Image
                </Button>
            </label>
            <Button onClick={handleFileDisplay('image')} disabled={!files.image}>
                Display Image
            </Button>
            </div>
            <div className="input">
            <input
                accept="video/*"
                type="file"
                id="video-file"
                style={{ display: 'none' }}
                onChange={handleFileChange('video')}
            />
            <label htmlFor="video-file">
                <Button variant="contained" component="span">
                    Upload Video
                </Button>
            </label>
            <Button onClick={handleFileDisplay('video')} disabled={!files.video}>
                Display Video
            </Button>
            </div>
            <div className="input">
            <input
                accept="audio/*"
                type="file"
                id="audio-file"
                style={{ display: 'none' }}
                onChange={handleFileChange('audio')}
            />
            <label htmlFor="audio-file">
                <Button variant="contained" component="span">
                    Upload Audio
                </Button>
            </label>
            <Button onClick={handleFileDisplay('audio')} disabled={!files.audio}>
                Display Audio
            </Button>
            </div>
        </div>
        </div>
    );
}

export default UploadFiles;
