const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api2',{
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true
})


// const me = new User({
//     name: 'Ankita',
//     age: 20,
//     email: 'ank'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!', error)
// })


// const you = new Task({
//     description: 'you are my next target',
//     completed: true
// })
// you.save().then(()=>{
//     console.log(you)
// }).catch((error)=>{
//     console.log('Error!', error)
// })