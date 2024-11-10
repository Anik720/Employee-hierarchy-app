const express = require('express');
const request = require('supertest');
const app = express();  // Import your Express app

it('should return employee details for the given ID', async () => {
    const response = await request(app)
      .get('/api/employees/1')  

  });
  
  it('should return a 404 error when no employee is found for the ID', async () => {
    const response = await request(app)
      .get('/api/employees/999')  // Non-existing employee ID
    //   .expect(404);  // Expected HTTP status code
  
    // expect(response.body.success).toBe(false);  // Ensure success is false
    // expect(response.body.message).toBe('Employee not found');  // Ensure the correct error message
  });
  