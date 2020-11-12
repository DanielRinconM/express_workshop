//const bodyParser = require('body-parser');
//Dependencias
const morgan = require("morgan");
const express = require('express');
const app = express();
//Routes
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require('./middleware/cors.js');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
app.get("/",index);
app.use("/user",user);
app.use(auth);
app.use("/pokemon",pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running...");
});
