var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

var ApplicantSchema = new mongoose.Schema ({
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
var PaymentSchema = new mongoose.Schema ({
    payment: Number
})

var StudentSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

var ClassSchema = new mongoose.Schema ({
    name: String,
    date: String,
    type: String,
    description: String,
    size: Number
})

// checking if password is valid
StudentSchema.methods.validPassword = function(password) {
    console.log(password, 'in model student');
    console.log(this.password, 'password in database');

    return bcrypt.compareSync(password, this.password);
}

var xclass = mongoose.model('class', ClassSchema);

var student = mongoose.model('student', StudentSchema);

var payment = mongoose.model('payment', PaymentSchema);

var applicant = mongoose.model('applicant', ApplicantSchema);