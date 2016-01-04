var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClassSchema = new mongoose.Schema ({
    name: String,
    date: String,
    type: String,
    description: String,
    size: Number,
	students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
	instructors: {type: Schema.Types.ObjectId, ref: 'Instructor'}
})

mongoose.model('Class',ClassSchema);