const { json } = require('express');
const express = require('express');

const mongoose = require('mongoose');
const BrandName = require('./model');

const app = express ();
app.use(express.json())


mongoose.connect ('mongodb+srv://test:test@cluster0.zfgzz.mongodb.net/?retryWrites=true&w=majority').then(()=>
console.log("db connected")
).catch(err=> console.log(err));

app.get('/',(req,res)=>{
    res.send("hello");

});

app.post('/addbrands',async (req,res) => {
    const {brandname} = req.body;

    try{
        const newData = new BrandName({brandname});
        await newData.save();
        return res.json(await BrandName, find())
    }
    catch(err){
        console.log(err.message);
    }
});

app.get('/getallbrands',async (req,res) => {
    

    try{
        const allData = await BrandName.find();
        
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
});


app.get('/getallbrands/:id',async (req,res) => {
    

    try{
        const Data = await BrandName.findById(req.params.id);
        
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
});


app.delete('/deletebrand/:id',async (req,res) => {
    

    try{
        await BrandName.findByIdAndDelete(req.params.id);
        
        return res.json(await BrandName.find());
    }
    catch(err){
        console.log(err.message);
    }
});




app.listen(1012,() =>{
    console.log("server started.........!!!!!!!!!");
});