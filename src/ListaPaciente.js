import React from 'react';

function ListaPaciente({ patients }) {
    return (
        <div id="patient-list">
            <h2>Lista de Pacientes</h2>
            <ul>
                {patients.map((patient, index) => (
                    <li key={index}>
                        <p><strong>Cédula:</strong> {patient.cedula}</p>
                        <p><strong>Nombre:</strong> {patient.nombre}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {patient.fechaNacimiento}</p>
                        <p><strong>Dirección:</strong> {patient.direccion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPaciente;
