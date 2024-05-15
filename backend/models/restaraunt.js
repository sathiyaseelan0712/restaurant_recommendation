const mongoose = require('mongoose');
const rest = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    contact:{
        type: String,
    },
    location:{
        type: String,
    },
    rating:{
        type: Number,
    },
    offers:{
        type: Boolean,
        default: false,
    },
    menu:{
        type: [String],
    },
    cuisines:{
        type: [String],
    },
});
module.exports=mongoose.model('restaraunt',rest)