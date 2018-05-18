// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Somewhere to go',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// db.collection('Users').insertOne({
//   name: 'Titas Kundu',
//   age: 22,
//   location: 'Malda, West Bengal, India'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert Users', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });

  client.close();
});
