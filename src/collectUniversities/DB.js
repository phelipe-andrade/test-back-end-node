const UniversitySchema = require('../models/UniversitiesModel');
const mongoose = require('mongoose');
const { getById } = require('./getInfoDB');

module.exports = class DB{
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

  static async insertDB(uni){
    const UniversityModel = mongoose.model(uni.country , UniversitySchema);
    return await UniversityModel.create(uni);
  }

  static async updateDB(body, id){
    const universityDB = await getById(id);
    const UniversityModel = mongoose.model(universityDB.country , UniversitySchema);
    return await UniversityModel.findByIdAndUpdate(id, body, { new:true })
  }

  static async deleteDB(id){
    const universityDB = await getById(id);
    const UniversityModel = mongoose.model(universityDB.country , UniversitySchema);
    return await UniversityModel.findByIdAndDelete(id);
  }
}
