// src/api.js
const BASE_URL = 'http://localhost:8000';  // URL for your backend

export async function getPersonalDetails() {
    const response = await fetch(`${BASE_URL}/personal-details`);
    return await response.json();
}

export async function getSkills() {
    const response = await fetch(`${BASE_URL}/skills`);
    return await response.json();
}

export async function getExperience() {
    const response = await fetch(`${BASE_URL}/experience`);
    return await response.json();
}
