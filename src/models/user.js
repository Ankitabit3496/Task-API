const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name: {
       type: String
    },
    email: {
       type: String,
       required: true,
       trim: true,
       validate(value){
           if(!validator.isEmail(value)){
               throw new Error('Invalid email')
           }
       }
    },
    password: {
       type: String,
       required: true,
       trim: true,
       minlength: 7,
       validate(value){
           if(value.toLowerCase().includes('password')){
               throw new Error('password cannot contain "password"')
           }
       }
    },
    age: {
       type: Number,
       default: 0,
       validate(value){
          if(value<0){
              throw new Error('age must be a positive number')
          }
       }
    }
})

module.exports = User