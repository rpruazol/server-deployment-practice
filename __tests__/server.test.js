'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');


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
