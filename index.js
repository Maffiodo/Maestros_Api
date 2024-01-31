const express = require('express');
const app = express();

app.listen(3002, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
    const maestros = [
        { id: 1, nombre: 'Eva Claudia', Materia: 'Estandares y Metricas'},
        { id: 2, nombre: 'Luis Fernando', Materia: 'Principios IoT'},
        { id: 3, nombre: 'Milton Batres', Materia: 'Diseño de apps'},
        { id: 4, nombre: 'Juan Bustamante', Materia: 'Estructura de datos'},
        { id: 5, nombre: 'Jose Vidal', Materia: 'Aplicaciones web'},
        { id: 6, nombre: 'Dynhora Danheyda', Materia: 'Evaluacion y mejora'},
        { id: 7, nombre: 'Cristina Barba', Materia: 'Sociocultural'},
        { id: 8, nombre: 'Cristina Varela', Materia: 'Ingles'},
];

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de maestros');
});
