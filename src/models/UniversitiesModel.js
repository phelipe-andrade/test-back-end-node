const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
  country: { type: String, required: true },
  domains: Array,
  web_pages: Array,
  name: String,
  alpha_two_code: String,
  "state-province": String,
});



module.exports = UniversitySchema;
