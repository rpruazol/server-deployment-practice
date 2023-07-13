'use strict';

//I like that you have tests for all your CRUD routes. Very thorough.//

const supertest = require('supertest');
const { app } = require('../src/server');
const {dbInstance} = require('../src/models');

const request = supertest(app);

describe('basic server functionality', () => {
  test('request to hello route returns string', async () => {
    const response = await request.get('/');
    expect(response.body.text).toBe('hello world!')
  });
  test('request returns a valid timestamp', async () => {
    const response = await request.get('/');
    const time = new Date().toISOString();
    expect(typeof response.body.timestamp).toBe('string');
    expect(response.body.timestamp.slice(0, 19)).toStrictEqual(time.slice(0, 19));
  });
  test('test route', async () => {
    const response = await request.get('/test');
    expect(response.text).toBe('this is a test route');
  });
})

describe('routes and errors', () => {
  test('404 route', async () => {
    const response = await request.get('/bananas');
    expect(response.status).toBe(404);
  });
  test('404 method', async () => {
    const response = await request.post('/');
    expect(response.status).toBe(404);
  });
  test('500 person route', async () => {
    const response = await request.get('/person').query({name:null});
    expect(response.status).toBe(500);
  });
  test('person route', async () => {
    const response = await request.get('/person').query({name:'ray'});
    expect(JSON.parse(response.text)).toBeTruthy();
    expect(JSON.parse(response.text).name).toBe('ray');
    expect(response.status).toBe(200);
  });

})

describe('car route CRUD', () => {
  // import database connection
  const car = {
    make: 'toyota',
    model: 'camry',
    year: 2002,
    color: 'red',
    vin: '3TMMU52N88M007332'
  }
  beforeAll( async () => {
    // sync before tests, drop afterward
   await dbInstance.sync()
  });
  afterAll( async () => {
   await dbInstance.drop();
  });
  
test('POST a new car', async () => {
  const response = await request.post('/newcar').send(car);
  expect(JSON.parse(response.text)).toBeTruthy();
  expect(JSON.parse(response.text).vin).toBe('3TMMU52N88M007332');
}),

test('GET request all cars', async () => {
  await request.post('/newcar').send(car);
  const response = await request.get('/cars')
  // console.log(response._body);
  expect(response._body.length).toBe(2);
}),

test('UPDATE a single car', async () => {
  const response = await request.put('/updatecar/2').send({model:'highlander'});
  expect(JSON.parse(response.text).model).toBe('highlander');
}),

test('DELETE a single car', async () => {
  const response = await request.delete('/deletecar/2');
  expect(response.status).toBe(204);
  expect(response.body).toEqual({});

  const newRequest = await request.get('/cars')
  expect(newRequest._body.length).toBe(1);
})


})
