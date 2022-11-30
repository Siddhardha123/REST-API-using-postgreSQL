import express from 'express';
import studentRoutes from './routes.js' ;

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
