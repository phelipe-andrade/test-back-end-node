const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');

module.exports = class InsertDB{
  constructor(){
    this.contain = false;
  }

  async insertUniversity(body){
    const universitiesByCountryDB = mongoose.model(body.country, UniversitySchema);
    const arrayByCountryDB = await universitiesByCountryDB.find();

    return this.compareDB(body, arrayByCountryDB);
  }


  compareDB(uniApi, arrayUniDB){
    arrayUniDB.forEach((uniDb)=>{
      if(uniDb.name === uniApi.name && uniDb['state-province'] === uniApi['state-province']) this.contain = true; 
    })
    
    return this.contain;
  }

  insertDB(uni){
    const { country, domains, web_pages, name, alpha_two_code } = uni;
    const UniversityModel = mongoose.model(uni.country , UniversitySchema);
    UniversityModel.create({
      country: country,
      domains: domains,
      web_pages: web_pages,
      name: name,
      alpha_two_code: alpha_two_code,
      "state-province": uni['state-province'],
    })
  }
}
