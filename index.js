
const express = require('express');
const server = express();
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
server.get('/maestro', (req, res) => {
    res.send('Bienvenido a la API de maestros');
    console.log(req);
    console.log(req.params.maestro);
    numberarray.push(maestro);
    console.log(numero+maestros[numero].nombre);
    res.json("El nombre del maestro numero "+numero+"es: "+ maestros[numero].nombre);
});
server.put("/:id/Maestro/Materia",(req,res)=>{
    console.log(req);
    console.log(req.params.numero);
    maestros.push({id:id , nombre:Maestro, Materia:Materia});
    res.json("Numero Guardado");
})
server.delete("/:index",(req,res) => {
    numberarray.splice(req.params.index,1) //El uno hace referencia que borrará hasta que borre solo uno
    res.json("Elemento borrado");
    req.params.index 
})
server.post("/",(req,res) => {
    numberarray [req.query.index]=req.query.num;
})
server.listen(3002, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})//a ver si se va esto
//

