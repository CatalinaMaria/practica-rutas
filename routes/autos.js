const express = require('express');
const router = express.router();
const infoAutos = require('../db/index');

// 5. d
router.get('/products', function(req, res) {
    res.send('index', infoAutos);
  });


  // 5. e
  router.get('/products/brand/:marca', function(req, res) {

    let marcaAuto = req.params.marca
    let resultadosMarca = []
    for (let i = 0; i < infoAutos.lista.length; i++){
        if (infoAutos[i].marca == marcaAuto){
            resultadosMarca.push(infoAutos.lista[i])
        }
    }
    if (resultadoMarca.length == 0){
        return `No contamos con autos de la marca ${marca}`
    } else {
        return res.send(resultadosMarca)
    }
    
  });

  //5. f
  router.get('/products/color/:color', function(req, res) {

    let colorAuto = req.params.color
    let resultadosColor = []
    for (let i = 0; i < infoAutos.lista.length; i++){
        if (infoAutos[i].color == colorAuto){
            resultadosColor.push(infoAutos.lista[i])
        }
    }
    if (resultadosColor.length == 0){
        return `No contamos con autos de color ${color}`
    } else {
        return res.send(resultadosColor)
    }
    
  });

  // 5. g
  router.get('/products/color/:color', function(req, res) {

    let colorAuto = req.params.color
    let resultadosColor = []
    for (let i = 0; i < infoAutos.lista.length; i++){
        if (infoAutos[i].color == colorAuto){
            resultadosColor.push(infoAutos.lista[i])
        }
    }
    if (resultadosColor.length == 0){
        return `No contamos con autos de color ${color}`
    } else {
        return res.send(resultadosColor)
    }
    
  });
  //5. i
  router.get('/products/anio/:anio', function(req, res) {

    let anioAuto = req.params.anio
    let resultadosAnio = []
    for (let i = 0; i < infoAutos.lista.length; i++){
        if (infoAutos[i].anio == anioAuto){
            resultadosAnio.push(infoAutos.lista[i])
        }
    }
    if (resultadosAnio.length == 0){
        return `No contamos con autos del anio ${anio}`
    } else {
        return res.send(resultadosAnio)
    }
    
  });


  module.exports = router;