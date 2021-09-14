const express = require('express');


var resu=0;
function sumar(req, res, next){
  resu = parseFloat(req.params.n1)+parseFloat(req.params.n2);
  res.send(`El resultado de la SUMA es =  ${resu}`);
}

function multiplicar(req, res, next){
  resu = parseFloat(req.params.n1)*parseFloat(req.params.n2);
  res.send(`El resultado de la multiplicacion es =  ${resu}`);
}

function dividir(req, res, next){
  resu = parseFloat(req.params.n1)/parseFloat(req.params.n2);
  res.send(`El resultado de la division es =  ${resu}`);
}

function potencia(req, res, next){
  resu = Math.pow(parseFloat(req.params.n1), parseFloat(req.params.n2));
  res.send(`El resultado de la potencia es =  ${resu}`);
}

function resta(req, res, next){
  resu = parseFloat(req.params.n1)-parseFloat(req.params.n2);
  res.send(`El resultado de la resta es =  ${resu}`);

}
module.exports = {
  sumar, multiplicar, dividir, potencia, resta
}
