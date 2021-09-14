const express = require('express');

function list(req, res, next) {
  res.send('Lista de usuarios del sistema');
}

function index(req, res, next){
  res.send(`Usuario del sistema con un ID =  ${req.params.id}`);
}

function create(req, res, next){
  res.send("Crear un usuario nuevo");
}

function replace(req, res, next){
  res.send(`remplazo un usuario con ID = ${req.params.id} por otro.`);
}

function edit(req, res, next){
  res.send(`remplazo las propiedades del usuario con ID = ${req.params.id} por otro.`);
}

function destroy(req, res, next){
  res.send(`elimino un usuario con ID = ${req.params.id}`);

}
module.exports = {
  list, index, create, replace, edit, destroy
}
