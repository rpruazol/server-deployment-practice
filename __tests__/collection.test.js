'use strict';


const {dbInstance, vehicleCollection} = require('../src/models');

beforeAll(async () => {
  await dbInstance.sync()
})

afterAll(async () => {
  await dbInstance.drop()
})


describe('vehicle and car collection', () => {
  it('create one vehicle', async () => {
    const vehicle = {
      type: 'car',
      year: 1988,
      color: 'white',
      vin: '4T1BF3EK5BU638805',
      electric: false
    }
    const response = await vehicleCollection.create(vehicle);
    expect(response.color).toEqual('white')
  })
  it('read all vehicle data', async () => {
    const response = await vehicleCollection.read();
    expect(response.length).toEqual(1);
  })
  it('read one row of vehicle data', async () => {
    const response = await vehicleCollection.read(1);
    expect(response.id).toEqual(1);
  }),
  it('update one row of vehicle data', async () => {
    const response = await vehicleCollection.update(1, {color: 'brown'})
    expect(response.color).toEqual('brown');
  }),
  it('delete one row of vehicle data', async () => {
    const response = await vehicleCollection.delete(1)
    const newResult = await vehicleCollection.read()
    expect(newResult.length).toEqual(0);
  })


})