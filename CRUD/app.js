const express=require('express');
const app=express();

const userModel=require('./usermodel');

app.get("/",function(req,res){
    res.send("Welcome")
})

app.get("/create",async(req,res)=>{
let createduser=await userModel.create({
    name:"harshal",
    email:"harsh@gmail.com",
    username:"harsh"
})
res.send(createduser)
})

app.get("/update",async(req,res)=>{
let updateduser=await userModel.findOneAndUpdate({
    username:"harsh"
},{
    name:"hasrhvardhan"
},{
    new:true,
})
res.send(updateduser)
})

app.get("/read",async(req,res)=>{
    // let user = await userModel.find();
    let user = await userModel.findOne({username:"harsh"});
    res.send(user)
})


app.get("/delete",async function(req,res){
    let user=await userModel.findOneAndDelete({username:"harsh"});
    res.send(user);
})

app.listen(3000,function(){
    console.log("it's running")
})