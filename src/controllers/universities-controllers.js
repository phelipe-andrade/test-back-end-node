const mysql = require('../mysql');

exports.getAllUniversities = async (req, res, next) => {
  try {
    const result = await mysql.execute('SELECT * FROM produto;');
    const response = {
      quantidade: result.length,
      produtos: result.map((prod) => {
        return {
          id_produto: prod.id_produto,
          nome: prod.nome,
          preco: prod.preco,
          imagem_produto: prod.imagem_produto,
          request: {
            tipo: 'GET',
            descricao: 'Retorna os detalhes do produto',
            url: process.env.URL_API + '/produtos/' + prod.id_produto,
          },
        };
      }),
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};