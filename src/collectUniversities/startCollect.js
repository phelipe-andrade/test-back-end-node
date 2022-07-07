const CollectUniversities = require('./CollectUniversities');
const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');
const InsertDB = require('./InsertDB');

module.exports = async function startCollect(){
  const listCountry = [
    "argentina",
    "brazil",
    "chile",
    "colombia",
    "paraguay",
    "peru",
    "suriname",
    "uruguay"
  ];

  
  for(let country of listCountry){
    const universitiesByCountryDB = mongoose.model(country , UniversitySchema);
    const arrayByCountryDB = await universitiesByCountryDB.find();

    const univer = new CollectUniversities();
    const arrayBycountryApi = await univer.getUniversities(country);


    arrayBycountryApi.forEach((universityApi)=> {
      const insert = new InsertDB();
      const isIncluded = insert.compareDB(universityApi, arrayByCountryDB);
      if(!isIncluded) insert.insertDB(universityApi);
    })
  }

  console.log('Fim da captura');
}






