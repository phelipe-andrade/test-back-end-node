const express = require('express');
const router = express.Router();
//const login = require('../middleware/login');
const universitiesControllers = require('../controllers/universities-controllers');


// RETORNA TODOS OS PRODUTOS
router.get('/', universitiesControllers.getAllUniversities);

// INSERE UM PRODUTO
// router.post(
//   '/',
//   login.obrigatorio,
//   upload.single('produto_imagem'),
//   produtosControllers.postProduto,
// );

// //RETORNA OS DADOS DE UM PRODUTO
// router.get('/:id_produto', produtosControllers.getUmProduto);

// //ALTERAR UM PRODUTO
// router.patch('/', login.opcional, produtosControllers.alteraProduto);

// //EXCLUI UM PRODUTO
// router.delete('/', login.obrigatorio, produtosControllers.deleteProduto);

module.exports = router;
