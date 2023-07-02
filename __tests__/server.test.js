'use strict';

const supertest = require('supertest');
const app = require('../server');


const request = supertest(app);

describe('basic server functionality', () => {
  test('request to hello route returns string', async () => {
    const response = await request.get('/');
    expect(response.body.text).toBe('hello world!')
  });
  test('request returns a valid timestamp', async () => {
    const response = await request.get('/');
    expect(typeof response.body.timestamp).toBe('string');
  });
  test('test route', async () => {
    const response = await request.get('/test');
    expect(response.text).toBe('this is a test route');
  })
})
