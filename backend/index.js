const express = require('express');
const mangoose = require('mongoose');
const restaraunt = require('./route/restaraunt')
const app = express();
const cors=require('cors');
app.use(cors());
const port = 3000;
app.use(express.json());

const url = "mongodb://localhost:27017/restarauntdb";
mangoose.connect(url)
.then((_)=>{
    console.log("Connected succesfully");
})
.catch((err)=>{
    console.log(err.message);
})

app.use('/',restaraunt);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});