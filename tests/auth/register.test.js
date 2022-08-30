const request = require('supertest');
const app = require('../../app');
const sequelize = require("../../models/index");

describe('Register a user', () => {
  
  beforeAll(async () => {
    await sequelize.sync({force: true})
  })
  
  it('should return a status code of 201', async () => {
    // Arrange
    const payload = {
      username: "john",
      email: "john@gmail.com",
      password: "test1234"
    };
    
    // Act
    const response = await request(app)
      .post('/api/v1/register')
      .send(payload)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    // Assert
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message');
  });
});