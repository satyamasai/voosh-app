const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb+srv://satyam1516:161996@cluster0.wvfqlcv.mongodb.net/voosh_foods?retryWrites=true&w=majority");
module.exports={
    connection
}