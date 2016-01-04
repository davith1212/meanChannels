var mongoose = require('mongoose');
var applicants = mongoose.model('applicant');
var Payments = mongoose.model('payment');
var Students = mongoose.model('student');
var Classes = mongoose.model('class');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

module.exports = (function () {

	return {
		applyIndex: function (req, res) {
			applicants.find({}, function (err, output) {
				if(err) {
					console.log(err);
				}
				else {
					res.json(output);
				}
			})
		},
		createApplicant: function (req, res) {
			var applicant = new applicants ({
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
			applicant.save(function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log(applicant,'Application Added!');
					res.json(200);
				}
			})
		},
		getPayment: function (req, res) {
			var payment = new Payments ({
				payment: req.body.payment
			})
			console.log(payment, "in back");
				payment.save(function (err) {
					if (err) {
						console.log(err);
					}
					else {
						console.log("payment added");
						res.json(200);
					}
				})
		},
		paymentIndex: function (req, res) {
				Payments.find({}, function (err, output) {
					if(err) {
						console.log(err);
					}
					else {
						res.json(output);
					}
				})

		},
		removeData: function (req, res) {
			Payments.remove({}, function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log('removed all');
					res.json(200);
				}
			})
		},
		studentIndex: function (req, res) {
			Students.find({}, function (err, output) {
				if (err) {
					console.log(err);
				}
				else {
					console.log('Student found');
					res.json(output);
				}
			})
		},
		createStudent: function (req, res) {
			req.body.password = bcrypt.hashSync(req.body.password, salt);
			var newStudent = new Students({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: req.body.password
			})
			newStudent.save(function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log('Student was added!');
					res.json(200);
				}
			})
		},
		removeStudent: function (req, res) {
			Student.findOne({_id: req.body._id}, function (err, student) {
				Student.remove({_id: req.body._id}, function (err) {
					console.log(req.body);
					if(err) {
						console.log(err);
					}
					else {
						console.log('Student Removed!');
						res.json(200);
					}
				})
			})
		},
		classIndex: function (req, res) {
			Classes.find({}, function (err, output) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("Class found!");	
					res.json(output);
				}
			})
		},
		addClass: function (req, res) {
			var xclass = new Classes ({
				name: req.body.name,
				date: req.body.date,
				type: req.body.type,
				description: req.body.description,
				size: req.body.size
			})
			console.log(xclass);
			xclass.save(function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log('Added Class!');
					res.json(200);
				}
			})
		},
		removeClass: function (req, res) {
			Classes.findOne({_id: req.body._id}, function (err, xclass) {
				Classes.remove({_id: req.body._id}, function (err) {
					if(err){
						console.log(err);
					}
					else {
						console.log('Removed , ', req.body.name);
						res.json(200);
					}
				})
			})
		}
	}
})();