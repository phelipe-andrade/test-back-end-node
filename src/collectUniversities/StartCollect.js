const CollectUniversities = require('./CollectUniversities');
const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');
const DB = require('./DB');

class StartCollect{
  constructor(){
    this.listCountry = [
      "argentina",
      "brazil",
      "chile",
      "colombia",
      "paraguay",
      "peru",
      "suriname",
      "uruguay"
    ];
  }

  async getUniversitiesByCountry(){
    for(let country of this.listCountry){
      const universitiesByCountryDB = mongoose.model(country , UniversitySchema);
      this.arrayByCountryDB = await universitiesByCountryDB.find();
  
      const univer = new CollectUniversities();
      this.arrayBycountryApi = await univer.getUniversities(country);
  
      await this.startInsert()
      
    }
  }  


  async startInsert() {
    for(let universityApi of this.arrayBycountryApi) {
      const insert = new DB()
      const isIncluded = insert.compareDB(universityApi, this.arrayByCountryDB);
      if(!isIncluded) await DB.insertDB(universityApi);
    }
  }

  async init(){
    console.log('Começo da captura');
    await this.getUniversitiesByCountry()
    console.log('Fim da captura')
  }
};

module.exports = StartCollect;







