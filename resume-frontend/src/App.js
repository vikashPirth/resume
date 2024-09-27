// src/App.js
import React from 'react';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
    return (
        <div className="App">
            <h1>My Resume</h1>
            <PersonalDetails />
            <Skills />
            <Experience />
        </div>
    );
}

export default App;