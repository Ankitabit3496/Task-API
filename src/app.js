const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT||3000

const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req,res)=>{
    res.send()
})

app.use(express.json())
app.use(userRouter)
// const router = new express.Router()
// router.get('/test',(req,res)=>{
//     res.send('This is from my other router')
// })
// app.use(router)


app.post('/tasks', async(req,res)=>{
const task = new Task(req.body)
try{
    await task.save()
    res.status(201).send(task)
}catch{
    res.status(400).send(e)
}
// task.save().then(()=>{
//     res.status(201).send(task)
// }).catch((e)=>{
//     res.status(400).send(e)
// })
})

module.exports = app

