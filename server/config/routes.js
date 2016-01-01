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
}