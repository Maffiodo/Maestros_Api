
const express = require('express');
const server = express();
server.use(express.json());
const PORT = 3002;
let numberarray = [1,2,3,4,5];
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
server.get('/', (req, res) => {
    res.send('Bienvenido a la API de maestros');
});


server.listen(3002, () => {
    console.log('Servidor corriendo en http://localhost:3002');
});

server.get('/maestros', (req, res) => {
    res.send(maestros);
});

server.get('/maestros/:id', (req, res) => {
    const maestro = maestros.find(m => m.id === parseInt(req.params.id));
    if (!maestro) res.status(404).send('El maestro no fue encontrado');
    res.send(maestro);
});

server.post('/maestros', (req, res) => {
    const maestro = {
        id: maestros.length + 1,
        nombre: req.body.nombre,
        Materia: req.body.Materia
    };
    maestros.push(maestro);
    res.send(maestro);
});

server.put('/maestros/:id', (req, res) => {
    const maestro = maestros.find(m => m.id === parseInt(req.params.id));
    if (!maestro) res.status(404).send('El maestro no fue encontrado');
    maestro.nombre = req.body.nombre;
    maestro.Materia = req.body.Materia;
    res.send(maestro);
});

server.delete('/maestros/:id', (req, res) => {
    const maestro = maestros.find(m => m.id === parseInt(req.params.id));
    if (!maestro) res.status(404).send('El maestro no fue encontrado');
    const index = maestros.indexOf(maestro);
    maestros.splice(index, 1);
    res.send(maestro);
});

server.patch('/maestros/:id', (req, res) => {  
    const maestro = maestros.find(m => m.id === parseInt(req.params.id));
    if (!maestro) res.status(404).send('El maestro no fue encontrado');
    maestro.nombre = req.body.nombre;
    maestro.Materia = req.body.Materia;
    res.send(maestro);
});

