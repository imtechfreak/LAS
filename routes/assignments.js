var express=require('express');
var Assignment=require('../models/Assignment');
var assignments=express.Router();


 assignments.route('/')
 	.post(function (req,res) {
 		var ass=Assignment(req.body);
 		ass.save(req.body,function (err,data) {
 			if(err){
 				console.log("Error");
 				res.send("Got Error");
 			}
 			else{
 				res.send(data);
 			}
 		});
 	})
 	.get(function (req,res) {
  		console.log('get many');
 		res.send("get many");
  	});
 	
assignments.route('/:id')
	.put(function (req,res) {
		console.log('put');
 		res.send("put");
 	})
	.delete(function (req,res) {
 		console.log('delete');
 		res.send("delete");
 	})
	.get(function (req,res) {
 		console.log('get');
 		res.send("get");
 	}); 	


 module.exports=assignments;