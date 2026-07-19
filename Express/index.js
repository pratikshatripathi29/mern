
const express=require('express');
const app=express();
// console.dir(app);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

// app.use((req,res)=>{
//     console.log("Request received");
// })

app.use((req,res)=>{
    console.log("Request received");
    res.send("<h1>Welcome to Express</h1>");
});
