const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
  country: { type: String, required: true },
  domains: [{type: String, default: ''}],
  web_pages: [{type: String, default: ''}],
  name: {type: String, default: ''},
  alpha_two_code: {type: String, default: ''},
  "state-province": {type: String, default: null},
});



module.exports = UniversitySchema;
