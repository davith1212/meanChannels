var mongoose = require('mongoose');
var Instructor = mongoose.model('Instructor');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

module.exports = (function(){
	return{
		show: function (req, res) {
			Instructor.find({}, function (err, output) {
				if(err) {
					console.log(err);
				}
				else {
					res.json(output);
				}
			})
		},
		add:function (req, res) {
			req.body.password = bcrypt.hashSync(req.body.password, salt);
			var newInstructor = new Instructor ({
			    first_name: req.body.first_name,
                last_name: req.body.last_name,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                bday: req.body.bday,
                class_type: req.body.class_type,
                class_description: req.body.class_description,
                certified_yes: req.body.certified_yes,
                certified_no: req.body.certified_no,
                date_certified: req.body.date_certified,
                cert_type: req.body.cert_type,
                training_school: req.body.training_school,
                currently_teaching_yes: req.body.currently_teaching_yes,
                currently_teaching_no: req.body.currently_teaching_no,
                time_teaching: req.body.time_teaching,
                experience: req.body.experience,
                references: req.body.references
			})
			newInstructor.save(function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log(newInstructor,'instructor Added!');
					res.json(200);
				}
			})
		}
	}
})();