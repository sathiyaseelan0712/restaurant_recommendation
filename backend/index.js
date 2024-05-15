const express=require('express');
const mongoose=require('mongoose');

const app=express();

const url = 'mongodb://localhost:27017/restarauntDB'
mongoose.connect(url);

const port = 3000;


