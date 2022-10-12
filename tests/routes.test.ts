import { Server } from 'http';
import request from 'supertest';
import app from './../src/app';
import dotevn from 'dotenv';
// Initialize configuration
dotevn.config();

describe('Test the welcome page', () => {
  test(`Should return the text 'Welcome to >>> IQAir API.'`, async () => {
    const res = await request(app).get('/').send();
    expect(res.text).toEqual('Welcome to >>> IQAir API.');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Test the nearest city endpoint.', () => {
  test('Should return an object with a key of Result', async () => {
    const lat = 40.73061;
    const long = -73.935242;
    const res = await request(app).get(`/nearest-city/${lat}/${long}`);
    expect(res.body).toHaveProperty('Result');
    expect(res.statusCode).toEqual(200);
  });
});
