//var fs = require('fs')
//fs.readFile('calc.js','utf8',function(err,data){
//    console.log(data)
//})
//fs.appendFile('calc.js','console.log("Done")',function(err){
//    console.log("Data Saved")
//})
//fs.unlink('calc1.js',function(err){
//    console.log("Deleted")
//})
const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send("Hello World")
})
app.get('/alien',function(req,res){
    const id = req.query.id
    if(id)
    res.send("welcome back alien " + id)
    else
    res.send("welcome back alien ")
})
app.get('/alien/:id',function(req,res){
    const id = req.params.id
    res.send("Hey Yash " + id)
})

app.listen(8001,function(req,res){
    console.log("Running..")
});
