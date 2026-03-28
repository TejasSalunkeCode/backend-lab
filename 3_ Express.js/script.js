const express = require('express');
const app = express();


app.use(function(req,res,next){
    console.log("middleware chala");
    next();
})

app.use(function(req,res,next){
    console.log("middleware chala ek aaur bar");
    next();
})

app.get('/',function(req,res){
    res.send("Hello World");
})

app.get('/about',function(req,res){
    res.send("mera beta");
})
app.get('/profile',function(req,res,next){
    return next(new Error("something went wrong"))
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Something went wrong,we dont have")
})

app.listen(3000);