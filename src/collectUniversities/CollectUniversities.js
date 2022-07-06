const axios = require('axios');

module.exports = class GetUniversities{
  async getUniversities(university) {
    try {
      this.response = await axios(`${process.env.API_URL}${university}`);
      return this.response.data;
    } catch (error) {
      console.error(error);
    } 
  }
}
