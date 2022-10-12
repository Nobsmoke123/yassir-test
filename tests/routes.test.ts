import { Server } from 'http';
import request from 'supertest';
import app from './../src/app';
import dotevn from 'dotenv';
// Initialize configuration
dotevn.config();

describe('Test / Endpoint', () => {
  test(`Should return the text 'Welcome to >>> IQAir API.'`, async () => {
    const res = await request(app).get('/').send();
    expect(res.text).toEqual('Welcome to >>> IQAir API.');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Nearest city====Endpoint', () => {
  test('Should return an object with a key of Result', async () => {
    jest.setTimeout(10000);
    const lat = 40.73061;
    const long = -73.935242;
    const res = await request(app).get(`/nearest-city/${lat}/${long}`);
    expect(res.statusCode).toEqual(200);

    expect(res.body.Result.Pollution).toHaveProperty('maincn');
    expect(res.body.Result.Pollution).toHaveProperty('aqicn');
    expect(res.body.Result.Pollution).toHaveProperty('mainus');
    expect(res.body.Result.Pollution).toHaveProperty('aqius');
    expect(res.body.Result.Pollution).toHaveProperty('ts');
  });
});
