const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./model/user')

app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")));


app.get("/",function(req,res){
    res.render("index");
})


app.get("/read",function(req,res){
    res.render("read")
})

app.post('/create',(req,res)=>{
    let{name,email,imagurl}=req.body;
    console.log(req.body);
    
   let createuser=userModel.create({
        name,
        email,
        imagurl 
    });
    res.send(createuser)

})


app.listen(3000);