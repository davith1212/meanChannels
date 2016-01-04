var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var Schema = mongoose.Schema;

var InstructorSchema = new mongoose.Schema ({
    first_name: String,
    last_name: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number,
    email: String,
    password: String,
    bday: String,
    class_type: String,
    class_description: String,
    certified_yes: String,
    certified_no: String,
    date_certified: String,
    cert_type: String,
    training_school: String,
    currently_teaching_yes: String,
    currently_teaching_no: String,
    time_teaching: String,
    experience: String,
    references: String,
})
InstructorSchema.methods.validPassword = function(password) {
        console.log('inInstMOdelvalidpass');
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('Instructor', InstructorSchema);