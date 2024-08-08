import React, { useState } from 'react';
import Form from './Form';
import ListaPaciente from './ListaPaciente';
import './App.css';

function App() {
    const [patients, setPatients] = useState([]);

    const addPatient = (patient) => {
        setPatients([...patients, patient]);
    };

    return (
        <div className="app">
            <h1>Registro de Pacientes</h1>
            <div id="main-container">
                <Form addPatient={addPatient} />
                <ListaPaciente patients={patients} />
            </div>
        </div>
    );
}

export default App;

