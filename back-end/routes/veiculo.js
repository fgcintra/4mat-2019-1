const express = require('express');
const router = express.Router();
const controller = require('../controllers/veiculo');

router.post('/', controller.novo);
router.get('/', controller.listar);
router.get('/:id', controller.obterUm);
router.patch('/', controller.atualizar);

module.exports = router;