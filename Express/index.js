
const express=require('express');
const app=express();
// console.dir(app);
const port=3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})

// app.use((req,res)=>{
//     console.log("Request received");
// })

// app.use((req,res)=>{
//     console.log("Request received");
//     res.send("<h1>Welcome to Express</h1>");
// });

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Express</h1>");
})
app.get('/:username',(req,res)=>{
    // const username=req.params;
    console.log(req.params);
    res.send("<h1>Welcome " + req.params.username + "</h1>");
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send("<h1>Search Page</h1>");
});

// app.get('/about',(req,res)=>{
//     res.send("<h1>I hate everyone</h1>");
// })
// app.get('/contact',(req,res)=>{
//     res.send("<h1>Contact is not required</h1>");
// })
// app.post('/login',(req,res)=>{
//     res.send("<h1>Login Page</h1>");
// })