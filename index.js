const bodyParser = require('body-parser');
const morgan = require("morgan");
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/*
Verbos HTTP
Denotan una acción en particular
Maneras en las que se pueden realizar peticiones entre diferentes peticiones dentro de la red
**Recurso --> cualquier registro en una base de datos
- GET: Para obtener un recurso
- POST: Para almacenar o crear recursos
- PATCH: Actualización de un dato de un recurso
- PUT: Actualización de todos los elementos de un recurso
- DELETE: Eliminar un recurso
*/

/*
get(url después de ip y puerto,req: petición que hace el cliente,
    res: respuesta que vamos a dar,next)
*/
// el orden de las rutas importa
app.get("/",(req,res,next)=>{
    //res.send(pokemon);
    //res.status(200);
    return res.status(200).send("Bienvenido al Pokedex");
});

app.use("/pokemon",pokemon);


app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running...");
});
