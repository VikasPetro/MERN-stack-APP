const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
taskname:{
  type:String,
  required:true,
},
isDone :{
type:Boolean,
required:false,
}
});
const taskModel = mongoose.model('todos',taskSchema);
module.exports = taskModel;