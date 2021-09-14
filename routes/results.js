const express = require('express');
const router = express.Router();

const controller = require('../controllers/results');

/* GET users listing. */

router.get('/:n1/:n2', controller.sumar);

router.post('/:n1/:n2', controller.multiplicar);

router.put('/:n1/:n2', controller.dividir);

router.patch('/:n1/:n2', controller.potencia);

router.delete('/:n1/:n2', controller.resta);

module.exports = router;
