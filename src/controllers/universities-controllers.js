const { getAllUniversities, getByCountry, getById } = require('./getInfoDB');

exports.getUniversities = async (req, res, next) => {
  const country = req.query['country'];
  try {
    let result
    if(!country) result = await getAllUniversities();
    else result = await getByCountry(req);
    const response = {
      quantidade: result.length,
      universities: result.map((uni)=>{
        return {
          _id: uni._id,
          name: uni.name,
          country: uni.country,
          'state-province': uni['state-province']
        }
      })
    }
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


