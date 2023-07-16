'use strict';

// this is only doing CRUD stuff.  so no handling of requests/responses, which is only for the routes.

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    return await this.model.create(obj);
  }

  async read(id = null, options = {}) {
    let records;
    if(id === null){
      records = await this.model.findAll(options) 
    }else {
      options.where = {id : id}
      records = await this.model.findOne(options);
    }
    return records;
  }

  async update(id, data) {
    const record = await this.model.findOne({where:{id}});

    return await record.update(data);
  }

  async delete(id) {
    const response = await this.model.destroy({where:{id}})
    return response
  }
}

module.exports = Collection;