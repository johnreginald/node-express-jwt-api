const request = require('supertest');
const app = require('../../app');

describe('Register a user', () => {
  it('should return a status code of 201', async () => {
    const response = await request(app).post('/api/v1/register');
    expect(response.statusCode).toBe(200);
  });
});

