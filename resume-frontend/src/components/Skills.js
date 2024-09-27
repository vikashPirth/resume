// src/components/Skills.js
import React, { useEffect, useState } from 'react';
import { getSkills } from '../api';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getSkills();
            setSkills(data);
        }
        fetchData();
    }, []);

    if (skills.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
