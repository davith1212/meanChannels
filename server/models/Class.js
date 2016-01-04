var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClassSchema = new mongoose.Schema ({
    name: String,
    date: Date,
    type: String,
    description: String,
    size: Number
})
mongoose.model('Class',ClassSchema);