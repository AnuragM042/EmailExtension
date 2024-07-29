// src/components/ProfileForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = ({ onProfileSave }) => {
    const [subject, setSubject] = useState('');
    const [info, setInfo] = useState('');
    const [attachments, setAttachments] = useState([]);

    const handleSubmit = async () => {
        const profile = { subject, info, attachments };
        try {
            const res = await axios.post('/api/profiles', profile);
            onProfileSave(res.data);
            setSubject('');
            setInfo('');
            setAttachments([]);
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    };

    return (
        <div className="profile-form">
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="input"
            />
            <textarea
                placeholder="Information"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                className="textarea"
            ></textarea>
            <input
                type="file"
                multiple
                onChange={(e) => setAttachments([...e.target.files])}
                className="file-input"
            />
            <button onClick={handleSubmit} className="button">Save Profile</button>
        </div>
    );
};

export default ProfileForm;
