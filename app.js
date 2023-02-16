const express = require('express');
const app = express();

app.set('view engine', 'ejs'); //Motor de plantillas

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen('5000', ()=>{
    console.log('Está escuchando en http://localhost:5000');
})







