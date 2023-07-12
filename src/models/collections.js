'use strict';

// this is only doing CRUD stuff.  so no handling of requests/responses, which is only for the routes.

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    const response = await this.model.create(obj);
    return response;
  }

  async read(id = null) {
    return id === null ? await this.model.findAll() : await this.model.findOne({where: {id}})
  }

  async update(id, data) {
    const record = await this.model.findOne({where:{id}});

    const response = await record.update(data);
    return response;
  }

  delete(id) {
// 
  }
}

module.exports = Collection;