// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
    console.log('Connected to mongodb server.');
    const db = client.db('TodoApp');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //   console.log(`Required items have been deleted: ${result}`);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'breakfast at rooftop padio'}).then((result) => {
    //   console.log(`One item of the required info has been deleted: ${result}`);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'breakfast at rooftop padio', completed: false}).then((result) => {
      console.log(result);
    });

    //delete by id
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5afeac338b74c6127b2bb55b")})
    .then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
      console.log('Unable to find required id');
    });

  client.close();
});
