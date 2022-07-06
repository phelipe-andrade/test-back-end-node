const CollectUniversities = require('./CollectUniversities');
const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');
const InsertDB = require('./InsertDB');

module.exports = async function startCollect(){
  const listUniversities = [
    "argentina",
    "brazil",
    "chile",
    "colombia",
    "paraguay",
    "peru",
    "suriname",
    "uruguay"
  ]

  const listUniversitiesOriginal = [
    "argentina",
    "brasil",
    "chile",
    "colombia",
    "paraguai",
    "peru",
    "suriname",
    "uruguay"
  ]

  
  for(let university of listUniversities){
    const universitiesByCountryDB = mongoose.model(university , UniversitySchema);
    const arrayByCountryDB = await universitiesByCountryDB.find();

    const univer = new CollectUniversities();
    const arrayBycountryApi = await univer.getUniversities(university);


    arrayBycountryApi.forEach((universityApi)=> {
      const insert = new InsertDB();
      insert.compareDB(universityApi, arrayByCountryDB);
    })
  }

  console.log('Fim da captura');
}






