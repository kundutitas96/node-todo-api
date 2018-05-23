const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5aff7a4ac2cf4c21c96c73d7';

//find all documents with same attributes
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //find one document with similar attributes
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

//find one specific document with id
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5aff7a4ac2cf4c21c96c73d7').then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
},(e) => {
  console.log(e);
});
