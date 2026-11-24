//SErver create krta h, and configure krta h

const express=require('express');

const app=express();
app.use(express.json())

const notes=[]

app.post('/notes',(req,res)=>{
   notes.push(req.body);

    res.send("notes created");
})

app.get('/notes', (req,res)=>{
console.log(req.body);
    res.send(notes);
})

//DELETE api

app.delete('/notes/:index', (req, res)=>{
   console.log(req.params.index); //index value 2
  
  delete notes[req.params.index];
   res.send("note deleted successfully.");
})


app.get('/',(req,res)=>{
    res.send("hello worlddd");
})


//PATCH /notes/:index 
//req.body={description:= "sample modified description"}
app.patch('/notes/:index', (req,res)=>{
 notes[req.params.index].description=req.body.description; //patch ke time jo updated description bejte h vo dal dete h 
    res.send("description updated");
})


module.exports=app;