// let student = require('express');
// let api= new student();
// let port= 3000;
// let pagesize=5;
// let fs= require('fs');
// let arrStudent=[];
// let fillname='students.txt';
// fs.readFile(fillname,'utf-8',(err,data)=>{
//     if (err){
//         console.log(err.message);
//     }
//     else {
//         arrStudent=JSON.parse("\n");
//         console.log(data);
//     }
// });
// api.get("/student/:page/",(req,res)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","*");
//     let page = req.url.split("/")[2];
//     start=(page-1)*pagesize;
//     end=start+pagesize;
//     res.send(arrStudent.slice(start,end));
// });
// api.listen(port);

let student = require('express');
let api= new student();
let port= 3000;
let pagesize=5;
let fs= require('fs');
let arrStudent=[];
let fillname='students.txt';
fs.readFile(fillname,'utf-8',(err,data)=>{
    if (err){
        console.log(err.message);
    }
    else {
        arrStudent=data.split("\n");
        arrStudent=JSON.parse(data);
        console.log(arrStudent);
    }
});
//api()
api.get("/student",(req,res)=>{
  let page2=req.query.page;
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    start=(page2-1)*pagesize;
    end=start+pagesize;
    res.send(arrStudent.slice(start,end));
});

api.get("/student/:id",(req,res)=>{
    let id=req.url.split("/")[2];
    res.send(arrStudent[0]);
   });


api.listen(port);