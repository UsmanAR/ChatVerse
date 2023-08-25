const express = require('express');
const app = express();
const port = process.env.port || 5005;
const http = require('http')
const cors = require('cors')

// app.use(cors)


//const server = http.createServer(app)

app.set('view engine','ejs')

app.get('/api',(req,res)=>{
    res.json({
        "Username": "Usman",
        "Age" : 21,
        "Placed" : true
    });
    console.log("Bloop2")
})
    

app.listen(port , ()=>{

})
