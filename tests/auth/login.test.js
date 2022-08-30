const request = require('supertest');
const app = require('../../app');
const sequelize = require("../../models/index");
const UserService = require('../../services/user.service');

describe('Login as a user', () => {
  
  beforeAll(async () => {
    await sequelize.sync({force: true})
  })
  
  it('should return a status code of 200', async () => {
    // Arrange
    const payload = {
      username: "john",
      email: "john@gmail.com",
      password: "test1234"
    };
    
    await UserService.createUser(payload);
    
    // Act
    const response = await request(app)
      .post('/api/v1/login')
      .send({
        username: payload.username,
        password: payload.password
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
    
    // Assert
    expect(response.statusCode).toBe(200);
  });
});

