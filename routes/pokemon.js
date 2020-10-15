const express = require('express');
const pokemon = express.Router();
const db = require('../config/database')

pokemon.post("/",(req,res,next)=>{
    return res.status(200).send(req.body.name);
});
pokemon.get("/", async (req,res,next)=>{
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});

pokemon.get('/:id([0-9]{1,3})', async (req,res,next)=>{
    const pkmn = await db.query("SELECT * FROM pokemon");
    const id = req.params.id -1;
    if(id >= 0 && id < pkmn.length+1){
        return res.status(200).send(pkmn[id]);
    }else{
        return res.status(404).send("Pokémon no encontrado");
    }
    
});

pokemon.get('/:name([A-Za-z]+)', async (req,res,next)=>{
    const pkmnbd = await db.query("SELECT * FROM pokemon");
    const name = req.params.name;
    const pkmn = pkmnbd.filter((p)=>{
        return (p.pok_name.toUpperCase() == name.toUpperCase()) && p;

    });
    (pkmn.length > 0) ? res.status(200).send(pkmn) : res.status(404).send("Pokémon no encontrado");
});

module.exports = pokemon;
