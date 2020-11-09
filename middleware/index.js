module.exports = (req,res,next)=>{
    //res.send(pokemon);
    //res.status(200);
    return res.status(200).json({code:1, message:"Bienvenido al Pokedex"});
}