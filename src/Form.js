import React, { useState } from 'react';

function Form({ addPatient }) {
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPatient = { cedula, nombre, fechaNacimiento, direccion };
        addPatient(newPatient);
        setCedula('');
        setNombre('');
        setFechaNacimiento('');
        setDireccion('');
    };

    return (
        <div id="form-container">
            <h2>Agregar Nuevo Paciente</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cedula">Cédula:</label>
                <input
                    type="text"
                    id="cedula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    required
                />
                
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input
                    type="date"
                    id="fechaNacimiento"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                />
                
                <label htmlFor="direccion">Dirección:</label>
                <input
                    type="text"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                />
                
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default Form;
