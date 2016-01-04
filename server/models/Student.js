var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var Schema = mongoose.Schema;

var StudentSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})
// checking if password is valid
StudentSchema.methods.validPassword = function(password) {
    console.log('inStuMOdelvalidpass');
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('Student', StudentSchema);