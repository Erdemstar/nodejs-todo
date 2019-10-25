/**
 * Task: type : String , Unique : True
 * isFinish , type : bool , required
 * 
 */
var mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    task:
    {
        type: String, unique: true, required: true
    }
    ,
    isFinish:
    {
        type: Boolean, required: true
    }
    ,
    myid:
    {
        type:Number , unique: true , required:true
    }
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;