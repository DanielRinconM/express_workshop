const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

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

app.post("/pokemon",(req,res,next)=>{
    return res.status(200).send(req.body.name);
});
app.get("/pokemon",(req,res,next)=>{
    //console.log(req.params.name);
    //res.send("Hola, "+req.params.name);
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=>{
    const id = req.params.id -1;
    if(id >= 0 && id < 151){
        return res.status(200).send(pokemon[req.params.id-1]);
        // o -> return res.send(pokemon[req.params.id-1]); sin el else
    }else{
        return res.status(404).send("Pokémon no encontrado");
    }
    
});

app.get('/pokemon/:name([A-Za-z]+)',(req,res,next)=>{
    const name = req.params.name;
    /*
    for(i=0;i<pokemon.length;i++){
        if(pokemon[i].name.toUpperCase() == name.toUpperCase()){
            return res.status(200).send(pokemon[i]);
        }
    }
    */
    const pk = pokemon.filter((p)=>{
        /*
        if(p.name.toUpperCase() == name.toUpperCase()){
            return p
        }
        NOTA: Un operador terniario regresa un valor a diferencia de un if que no lo hace
        */
        //return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;
        return (p.name.toUpperCase() == name.toUpperCase()) && p;

    });
    /*
    if(pk.length>0){
        return res.status(200).send(pk);
    }
    return res.status(404).send("Pokémon no encontrado");
    */
    (pk.length > 0) ? res.status(200).send(pk) : res.status(404).send("Pokémon no encontrado");
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running...");
});