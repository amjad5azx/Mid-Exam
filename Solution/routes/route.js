const express=require('express')
const {getAllTasks, getTaskById, addTask, updateTask, deleteTask}=require('../controller/taskController')

const route=express.Router()

route.get('/tasks',async(req,res)=>{
    getAllTasks(res)
})

route.get('/tasks/:id',async(req,res)=>{
    getTaskById(req,res)
})

route.post('/tasks',async(req,res)=>{
    addTask(req,res)
})

route.put('/tasks/:id',async(req,res)=>{
    updateTask(req,res)
})

route.delete('/tasks/:id',async(req,res)=>{
    deleteTask(req,res)
})

module.exports=route