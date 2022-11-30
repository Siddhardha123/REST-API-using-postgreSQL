import pool from '../db.js'
import queries from './queries.js'
import controller from './controller.js';


const getStudents = (req,res) =>{
    try{
        pool.query(queries.getStudents,(error,results)=>{
            if(error) throw error;
            res.status(200).json(results.rows);
        })
    }catch(err){
        console.log(err)
    }
   
}

const getStudentByID = (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
    }catch(err){
        console.log(err)
    } 
}

const addStudent = (req,res) => {
    try{
        const {name , email,age,dob} = req.body;
        pool.query(queries.addStudent,[name,email,age,dob],(error,results)=>{
            if(error) throw error;
            res.send("added")
        })

    }catch(error){
        console.log(error)
    }
}

const deleteByID = (req,res) =>{
    try{
        const id = parseInt(req.params.id);
        pool.query(queries.delStudentById,[id],(error,results)=>{
            if(error) throw error;
            res.send("deleted")
        })
    }catch(error){
        console.log(error)
    }
}
export default {
    getStudents,
    getStudentByID,
    addStudent,
    deleteByID,
}