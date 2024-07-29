// src/components/ProfileList.jsx
import React from 'react';

const ProfileList = ({ profiles, onSelectProfile }) => {
    return (
        <div className="profile-list">
            {profiles.map((profile, index) => (
                <div key={index} className="profile-item">
                    <h3>{profile.subject}</h3>
                    <p>{profile.info}</p>
                    <button onClick={() => onSelectProfile(profile)}>Select</button>
                </div>
            ))}
        </div>
    );
};

export default ProfileList;
