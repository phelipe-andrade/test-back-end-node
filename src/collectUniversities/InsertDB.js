const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');

module.exports = class InsertDB{
  constructor(){
    this.contain = false;
  }

  compareDB(uniApi, arrayUniDB){
    arrayUniDB.forEach((uniDb)=>{
      if(uniDb.name === uniApi.name) this.contain = true; 
    })
    if(!this.contain) this.insertDB(uniApi);
  }

  insertDB(uniApi){
    const { country, domains, web_pages, name, alpha_two_code } = uniApi;
    const UniversityModel = mongoose.model(uniApi.country , UniversitySchema);
    UniversityModel.create({
      country: country,
      domains: domains,
      web_pages: web_pages,
      name: name,
      alpha_two_code: alpha_two_code,
      "state-province": uniApi['state-province'],
    });
  }
}
