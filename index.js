const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

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
    //res.send(pokemon);
    res.status(200);
    res.send("Bienvenido al Pokedex");
})

app.get("/pokemon/all",(req,res,next)=>{
    //console.log(req.params.name);
    res.status(200);
    //res.send("Hola, "+req.params.name);
    res.send(pokemon);
})

app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=>{
    const id = req.params.id -1;
    if(id >= 0 && id < 151){
        res.status(200);
        res.send(pokemon[req.params.id-1]);
        // o -> return res.send(pokemon[req.params.id-1]); sin el else
    }else{
        res.status(404);
        res.send("Pokémon no encontrado");
    }
    
})

app.get('/pokemon/:name',(req,res,next)=>{
    const name = req.params.name;
    for(i=0;i<pokemon.length;i++){
        if(pokemon[i].name == name){
            res.status(200);
            res.send(pokemon[i]);
        }
    }
    res.status(404);
    res.send("Pokémon no encontrado");

})

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running...");
});