// CRUD ctreate read update delete operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL,{useUnifiedTopology: true}, (error, client) => {
     if(error){
         return console.log('unable to connect')
     }
     const db = client.db(databaseName)
//      db.collection('users').insertOne({
//          name: 'Ankita',
//          age: 20
//      }, (error, result) => {
//           if(error){
//               return console.log('unable to connect')
//           }
//           console.log(result.ops)
//      })
        db.collection('users').insertMany([
              {
                  name: 'jerry',
                  age: 21
              },{
                  name: 'tom',
                  age: 18
              }
        ],(error, result)=>{
            if(error){
                return console.log('unable to connect')
            }
            console.log(result.ops)
        })
     db.collection('users').findOne({name: 'jerry'},(error,user)=>{
             if(error){
                 return console.log('unable to fetch')
             }
             console.log(user)
     })

     //updation
     const updatePromise = db.collection('users').updateOne({
          _id: new ObjectID("f9fwe7837rql")
     },{
      $inc: {
           age: 1
      }
     })

     updatePromise.then((result)=>{
        console.log(result)
     }).catch((error)=>{
           console.log(error)
     })

     //deletion
    db.collection('users').deleteMany({
         age: 18
     }).then((result)=>{
         console.log(result)
     }).catch((error)=>{
         console.log(error)
     })

 })


