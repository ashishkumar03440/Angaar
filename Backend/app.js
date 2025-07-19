const express = require("express") 

const app = express();

app.get('/getmyname',(req,res)=>{
    res.send("boom my data is comming")
});

app.get('/ashish',(req,res)=>{
    res.send('ashish')
});
app.listen(5600,()=>{
    console.log("backend is running on port 5600")
});