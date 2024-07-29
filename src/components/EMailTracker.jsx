// src/components/EmailTracker.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailTracker = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const res = await axios.get('/api/emails');
                setEmails(res.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div className="email-tracker">
            <h2>Sent Emails</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>{email.subject} - {email.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmailTracker;
