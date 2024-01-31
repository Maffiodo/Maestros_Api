const express = require('express');
const server = express();
let numberarray = [1,2,3,4,5];


server.get("/",(req,res)=>{
    res.json(numberarray.toString());
});
server.put("/:numero",(req,res)=>{
    console.log(req);
    console.log(req.params.numero);
    numberarray.push(numero);
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
    console.log("HOLA MUNDO ");
})//a ver si se va esto