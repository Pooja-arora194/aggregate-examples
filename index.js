
const mongoose = require('mongoose');
  
// Database connection
mongoose.connect('mongodb+srv://pooja9877:poojaarora@cluster0.b0mbr8f.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  
// User model
const Customer = mongoose.model('Customer', { 
    name: { type: String },
    age: { type: String },
    position  : { type: String },
});
  
var query = Customer.find()
var data = Customer

  //query.where('age').gt(45).exec(function(err, res){
  //  if(err) console.log(err.message)
   // else console.log(res)
//});
//query.where( { age: { $gte: 55 } } ).exec(function(err, res){
   // if(err) console.log(err.message)
  //  else console.log(res)
//});
//query.where( { age: { $lte: 12 } } ).exec(function(err, res){
    // if(err) console.log(err.message)
  //  else console.log(res)
 //});

 //query.where( { age: { $lte: 35 } } ).limit(1).exec(function(err, res){
    // if(err) console.log(err.message)
    //else console.log(res)
   // });
   //query.where( { age: { $lte: 35 } } ).skip(1).exec(function(err, res){
   // if(err) console.log(err.message)
   // else console.log(res)
   //});

   //query.where( { age: { $lte: 35 } } ).sort({"name":-1}).exec(function(err, res){
   // if(err) console.log(err.message)
   // else console.log(res)
   //});

   //query.where({position : {$regex : 'java'}}).exec(function(err, res){
   //  if(err) console.log(err.message)
    // else console.log(res)
   // });

   //query.where({position:{$regex:"java",$options:"$i"}}).exec(function(err, res){
   // if(err) console.log(err.message)
   //  else console.log(res)
   //  });
  
    
  // data.aggregate( [
  //  { $match : { name : 'diya' } }
  // ] ).exec(function(err, res){
   // if(err) console.log(err.message)
   //  else console.log(res)
   //  });  

    data.aggregate( [
    { $group:{ _id:'$name'} }
    ] ).exec(function(err, res){
    if(err) console.log(err.message)
        else console.log(res)
        });

      
      