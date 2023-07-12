'use strict';

// this is only doing CRUD stuff.  so no handling of requests/responses, which is only for the routes.

class Collection {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    const newObj = obj
    this.create(obj)
  }

  async read(id = null) {
    return id === null ? await this.model.findAll() : await this.model.findOne({where: {id: id}})
  }

  update(id) {
// 
  }

  delete(id) {
// 
  }
}

module.exports = Collection;