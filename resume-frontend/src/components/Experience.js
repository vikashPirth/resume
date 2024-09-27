// src/components/Experience.js
import React, { useEffect, useState } from 'react';
import { getExperience } from '../api';

const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getExperience();
            setExperience(data);
        }
        fetchData();
    }, []);

    if (experience.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Experience</h2>
            <ul>
                {experience.map(exp => (
                    <li key={exp.id}>
                        <strong>{exp.company}</strong> - {exp.title} ({exp.start_date} to {exp.end_date})
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
