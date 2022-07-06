const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');

exports.getAllUniversities = async (req, res, next) => {
  try {
    //const result = await   
    const response = {

    }

    const allUniversities = [];
    const collections = Object.keys(mongoose.connection.collections);

    
    for(let collection of collections){
      const universitiesByCountryDB = mongoose.model(collection , UniversitySchema);
      const arrayByCountryDB = await universitiesByCountryDB.find();
      arrayByCountryDB.forEach((uni)=>{ 
      const infoUni = {
        
      }
      allUniversities.push();
    })
      //allUniversities.push(arrayByCountryDB);
    };

    return res.status(200).send(allUniversities);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};