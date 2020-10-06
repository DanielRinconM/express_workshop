const express = require('express');
const app = express();


/*
Verbos HTTP
Denotan una acción en particular
Maneras en las que se pueden realizar peticiones entre diferentes peticiones dentro de la red
**Recurso --> cualquier registro en una base de datos
- GET: Para obtener un recurso
- POST: Cuando se quiere guardar y publicar algo
- PATCH: Actualización de un dato de un recurso en específico
- PUT: Actualización de todos los elementos
- DELETE: Eliminar un recurso
*/

/*
get(url después de ip y puerto,req: petición que hace el cliente,
    res: respuesta que vamos a dar,next)
*/
app.get("/",(req,res,next)=>{
    res.status(200)
    res.send("Hola Mundo");
})


app.listen(3000,()=>{
    console.log("server is running...");
});