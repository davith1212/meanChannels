var mongoose = require('mongoose');
var Student = mongoose.model('Student');

module.exports = (function(){
	return{
		show: function (req, res) {
			Student.find({}, function (err, output) {
				if (err) {
					console.log(err);
				}
				else {
					console.log('Student found');
					res.json(output);
				}
			})
		},
		add: function (req, res) {
			req.body.password = bcrypt.hashSync(req.body.password, salt);
			var newStudent = new Student({
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
		remove: function (req, res) {
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
		}
	}
})();