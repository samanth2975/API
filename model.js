const mongoose = require('mongoose');
const BrandName = mongoose.Schema({
//const BrandName = mongoose.String({

    BrandName:

    {
        type: String,
        requried: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('BrandName',BrandName);