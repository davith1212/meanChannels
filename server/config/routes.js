var applicants = require('./../controllers/controllers.js');

module.exports = function (app) {
	app.get('/applyIndex', function (req, res) {
		applicants.applyIndex (req, res);
	})
	app.post('/createApplicant', function (req, res) {
		applicants.createApplicant (req, res);
	})
	app.post('/getPayment', function (req, res) {
		applicants.getPayment (req, res);
	})
	app.get('/paymentIndex', function (req, res) {
		applicants.paymentIndex (req, res);
	})
	app.post('/removeData', function (req, res) {
		applicants.removeData (req, res);
	})
	app.get('/studentIndex', function (req, res) {
		applicants.studentIndex (req, res);
	})
	app.post('/createStudent', function (req, res) {
		applicants.createStudent (req, res);
	})
	app.post('/removeStudent', function (req, res) {
		applicants.removeStudent (req, res); 		
	})
	app.get('/classIndex', function (req, res) {
		applicants.classIndex (req, res);
	})
	app.post('/addClass', function (req, res) {
		applicants.addClass (req, res);
	})
	app.post('/removeClass', function (req, res) {
		applicants.removeClass (req, res);
	})
}