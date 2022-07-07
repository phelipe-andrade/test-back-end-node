const InsertDB = require('../collectUniversities/InsertDB');

class CheckBody{
  constructor(body){
    this.body = body
    this.errors = [];
    this.isIncluded = true;
  }

  checkFields(){
    this.fields();
    if(this.errors.length > 0) return this.errors;
  }

  fields(){
    if(!this.body.name || typeof this.body.name !== 'string') this.errors.push('Nome não inserido ou incorreto.');
    if(!this.body.country || typeof this.body.country !== 'string') this.errors.push('País não inserido.');
    if(this.body['state-province'] && typeof this.body['state-province'] !== 'string') this.errors.push('Nome do estado inválido.');
    if(!this.body.alpha_two_code || this.body.alpha_two_code.length < 2 || typeof this.body.alpha_two_code !== 'string') this.errors.push('Alpha two code não inserido ou incorreto.');
    if(!this.body.domains) this.errors.push('Dominio(s) não inserido(s).');
    if(!this.body.web_pages) this.errors.push('Web page(s) não inserida(s).');
  }

  async includedInDB(){
    const res = new InsertDB();
    return await res.insertUniversity(this.body);
  }
}

module.exports = CheckBody;





