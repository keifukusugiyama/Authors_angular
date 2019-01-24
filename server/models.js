//use mongoose 
var mongoose = require("mongoose");
//connect mongoose 
mongoose.connect('mongodb://localhost:27017/authorsdb', (err)=>{
    //if there's error, log
    if(err){
        console.log(err)
    }
});

var AuthorSchema = new mongoose.Schema({
    Name: {type:String, minlength:[3, "need longer name"]}
}, {timestamps:true})

//export the TaskSchema to controller.js
module.exports = mongoose.model('Author', AuthorSchema);
