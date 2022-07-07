const { getAllUniversities, getByCountry, getById } = require('./getInfoDB');
const { allUniversities, universitiesByPage } = require('./itemsBypage');
const CheckBody = require('./CheckBody');
const InsertDB = require('../collectUniversities/InsertDB');


exports.getUniversities = async (req, res, next) => {
  const country = req.query['country'];
  const page = req.query['page'];
  const limit = req.query['limit'];

  try {
    let result
    if(country) result = await getByCountry(req);
    else result = await getAllUniversities();

    let response;
    if(page) response = universitiesByPage(result, page, limit);
    else response = allUniversities(result);
  
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};


exports.getUniversitiesById = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  if(!id) return res.status(400).send('Id inexistente');
  try {
    const result = await getById(id);
    if(!result) return res.status(400).send('Id inexistente no banco de dados'); 
    const response = {
      university: {
        _id: result._id,
        name: result.name,
        domains: result.domains,
        web_pages: result.web_pages,
        country: result.country,
        'state-province': result['state-province'],
        alpha_two_code: result.alpha_two_code,
      }
    }
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
}

exports.postUniversity = async (req, res, next) => {
  const body = req.body;
  if(!body) return;

  try {
    const response = new CheckBody(body);
    const result = response.checkFields();
    if(result) return res.status(200).send(result);

    const isIncluded = await response.includedInDB();
    if(isIncluded) return res.status(200).send("Universidade já existente.");

    const insert = new InsertDB();
    insert.insertDB(body);
    const send = {
      message: "Universidade adicionada com sucesso!",
      university: {
        name: body.name,
        domains: body.domains,
        web_pages: body.web_pages,
        country: body.country,
        'state-province': body['state-province'],
        alpha_two_code: body.alpha_two_code,
      }
    }
    return res.status(200).send(send);

  } catch (error) {
    return res.status(500).send({ error: error });
  }
}


