const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');


exports.getAllUniversities = async () => {
  try{
    return await arrayAllUniversities();
  }catch(err){
    console.log(err);
  }
}

exports.getByCountry = async (req) => {
  const country = req.query['country'];
  try{
    const universitiesByCountry = mongoose.model(country, UniversitySchema);
    return await universitiesByCountry.find();
  }catch(err){
    console.log(err);
  }
}

exports.getById = async (id) => {
  let equal = undefined;
  try{
    const universitiesDb = await arrayAllUniversities()
    for(let key in universitiesDb){
      const idDb = universitiesDb[key]._id.valueOf();
      if(idDb === id) {
        equal = universitiesDb[key];
        break;
      }
    }
    console.log(equal);
    return equal;
  }catch(err){
    console.log(err);
  }
}


async function arrayAllUniversities(){
  const allUniversities = [];
  const collections = Object.keys(mongoose.connection.collections);

  for(let collection of collections){
    const universitiesByCountry = mongoose.model(collection , UniversitySchema);
    const arrayByCountry = await universitiesByCountry.find();

    arrayByCountry.forEach((uni)=> allUniversities.push(uni));
  };
  return allUniversities;
}