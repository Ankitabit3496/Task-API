const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

// const userOne = {
//     name: 'tom',
// }

beforeEach(async ()=>{
     await User.deleteMany()
})


test('should signup a new user', async()=>{
    await request(app).post('/users').send({
        name: 'Ankita',
        email: 'ank@g.com',
        password: 'red1234'
    }).expect(201)
})

test('should login existing user', async()=>{
    await request(app).post('/users/login').send({
        email:'',
        password: ''
    }).expect(200)
})