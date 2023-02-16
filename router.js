const express = require('express');
const router = express.Router();

const conexion = require("./databases/db")

router.get('/', (req, res) =>{
    
   conexion.query("SELECT videojuego_id, videojuegos.nombre, videojuegos.precio, plataforma.imagen FROM videojuegos, plataforma WHERE videojuegos.plataforma_id = plataforma.plataforma_id ORDER BY videojuego_id", (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("index", {results: results});
        }
   })
   
})

router.get("/create", (req, res) =>{
    res.render("create")
})

router.get("/edit/:id", (req, res) =>{
    const id = req.params.id
    conexion.query("SELECT * FROM videojuegos WHERE videojuego_id = ?",[id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("edit", {videojuego:results[0]});
        }
   })
})

router.get("/delete/:id", (req, res) =>{
    const id = req.params.id
    conexion.query("DELETE FROM videojuegos WHERE videojuego_id = ?",[id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect("/");
        }
   })
})


const crud = require("./controllers/crud");
router.post("/save", crud.save)
router.post("/update", crud.update)

module.exports = router;

//Toas las rutas las definimos en este archivo
