const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
  country: { type: String, required: true },
  domains: [{type: String}],
  web_pages: [{type: String}],
  name: String,
  alpha_two_code: String,
  "state-province": {type: String, default: null},
});



module.exports = UniversitySchema;
