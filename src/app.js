// Importacion de express
import express from "express";
// Se importa la clase Tecnologia
import Tecnologia from "./Tecnologia.js";


const app = express();
app.use(express.urlencoded({ extended: true }));

//Puerto
const PORT = 8080;


// instancia de la clase de productos que importamos de Tecnologia.js
const prod = new Tecnologia();

//Mostrar todos los productos y mostrar aplicando un limite
app.get("/products", (req, res) => {
    let limit = parseInt(req.query.limit);
    let allTecnologia = prod.getTecnologia(); // Llamada sincrónica
    if (!limit) return res.send(allTecnologia);
    let tecnologiaLimit = allTecnologia.slice(0, limit);
    res.send(tecnologiaLimit);
});


//  Filtrar los productos por Id 
app.get("/products/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let allTecnologia = prod.getTecnologia(); // Obtener los productos dentro de la función de ruta
    let tecnologiaId = allTecnologia.find(tecnologia => tecnologia.id === id);
    if (!tecnologiaId) return res.send("El producto no existe");
    res.send(tecnologiaId);
});


// Funcion para iniciar el puerto
const connection = app.listen(PORT, () => {
    console.log("Servidor conectado en el puerto", PORT);
});

//Url Mostrar todos los productos: http://localhost:8080/products
//Url Mostrar los productos que se deseen, estableciendo un limite:  http://localhost:8080/products/?limit=5
//Url Mostrar producto filtrado por ID: http://localhost:8080/products/9