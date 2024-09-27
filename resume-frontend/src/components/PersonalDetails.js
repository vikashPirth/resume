// src/components/PersonalDetails.js
import React, { useEffect, useState } from 'react';
import { getPersonalDetails } from '../api';

const PersonalDetails = () => {
    const [personalDetails, setPersonalDetails] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getPersonalDetails();
            setPersonalDetails(data);
        }
        fetchData();
    }, []);

    if (!personalDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{personalDetails.name}</h1>
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phone}</p>
            <p>{personalDetails.address}</p>
        </div>
    );
};

export default PersonalDetails;
