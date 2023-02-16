const conexion = require("../databases/db");

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const plataforma_id = req.body.plataforma_id;
    conexion.query("INSERT INTO videojuegos SET ?", {nombre: nombre, precio: precio, plataforma_id: plataforma_id}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    })
}

exports.update = (req, res) => {
    const videojuego_id = req.body.videojuego_id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const plataforma_id = req.body.plataforma_id;
    conexion.query("UPDATE videojuegos SET ? WHERE videojuego_id = ?", [{nombre: nombre, precio: precio, plataforma_id: plataforma_id}, videojuego_id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    })
}


