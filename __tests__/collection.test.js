'use strict';


const {dbInstance, vehicleCollection} = require('../src/models');

beforeAll(() => {
  dbInstance.sync()
})

afterAll(() => {
  dbInstance.drop()
})


describe('vehicle collection', () => {
  it('grabs all vehicle data', async () => {
    let response = await vehicleCollection.read();
    expect(response).toEqual([]);
  })
})