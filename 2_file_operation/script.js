const fs=require('fs');

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("done..!");
// })

fs.copyFile("hello.txt","hyy.txt",function(err){
    if(err) console.log(err);
    else console.log("done..!");
})