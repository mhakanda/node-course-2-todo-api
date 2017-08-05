// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//const{mon,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
var bb = db.collection('Todos').find().toArray().then((docs)=>{console.log(docs);},
(err)=>{console.log(err);});

// var bb = db.collection('Todos').find({_id:new ObjectID("59851954a8f60dbdbe279d61")}).toArray().then((docs)=>{console.log(docs);},
// (err)=>{console.log(err);});

// db.collection('Todos').find().count().then((count)=>
// {console.log(`total count: ${count}`);},
// (err)=>{console.log(err);});


//var bb = db.collection('Todos').find() is mongodb cursor, lots of methods
//var bb = db.collection('Todos').find().toArray() return promises, so we can use then
//var bb = db.collection('Todos').find().toArray().then(); we can include callback now
//console.log(bb);
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
