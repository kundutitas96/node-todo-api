// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
    console.log('Connected to mongodb server.');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5afedbacd408aa1a29afb72c')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({name: 'Star Lord'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch data from Users database', err);
    });

  client.close();
});
