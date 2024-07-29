// src/components/ProfileList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("/api/profiles");
        console.log("Backend response:", response.data); // Verify the response
        if (Array.isArray(response.data)) {
          setProfiles(response.data);
        } else {
          setProfiles([]);
          setError("Unexpected response format");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfiles();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <li key={profile._id}>{profile.subject}</li>
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
};

export default ProfileList;
