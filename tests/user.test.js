const request = require('supertest')
const app = require('../src/app')

test('should signup a new user', async()=>{
    await request(app).post('/users').send({
        name: 'Ankita',
        email: 'ank@g.com',
        password: 'red1234'
    }).expect(201)
})