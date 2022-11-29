const express = require('express');
const studentRoutes = require('./routes');

const app = express();

const port = 3000


app.get('/',(req,res)=>{
    res.send('hello')
})
app.use(express.json());
app.use('/api/v1/students',studentRoutes);


app.listen(port,()=>{
    console.log("server connected")
})
