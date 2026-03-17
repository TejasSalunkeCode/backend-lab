// alert("Helllo");

var arr=[1,2,3,4];

//? ForEach Loop
// arr.forEach(function(val){
//     console.log(val+" Hello world");
// })


//? Map Meathod
// var ans=arr.map(function(val){
//     return val*3;
// })
// console.log(ans);

//? Filter Meathod
// var ans=arr.filter(function(val){
//     if(val>3){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(ans);

//? Find meathod
// var ans=arr.find(function(val){
//     if(val==2){
//         return val;
//     }
// })
// console.log(ans);


//? index of
// console.log(arr.indexOf(32));


//? object 
// var obj={
//     name:"Tejas",
//     val:30,
// }
// Object.freeze(obj);
// obj.val=90;
// console.log(obj['name']);
// console.log(obj['name']);


//? Functions
// function abcd(){
//     return "ram ram jay shree ram...!";
// }
// let ans=abcd();
// console.log(ans);


//? async
async function abcd(){
    var blog=await fetch(`https://randomuser.me/api/`);
    var ans = await blog.json();
    
    console.log(ans.results[0])
}

abcd();

