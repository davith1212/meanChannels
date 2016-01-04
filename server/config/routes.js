var applicants = require('./../controllers/controllers.js');
var passport = require('passport');

module.exports = function (app) {
	app.get('/instructorIndex', function (req, res) {
		applicants.instructorIndex (req, res);
	})
	app.post('/createInstructor', function (req, res) {
		applicants.createInstructor (req, res);
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

	//local auth route
	// STUDENTS
	app.post('/loginStudent', function(req, res, next){
		console.log('inStuRtoues');
		passport.authenticate('local', function(err, student, info){
			if(err){return next(err);}
			if(!student) {
				console.log('Incorrect student pass combo!');
				return res.json({err: 'Invalid email and/or password combination!'});
			}
			req.logIn(student, function(err){
				if(err){ return next(err);}
				console.log('success');
				console.log(req.isAuthenticated());
				console.log(req.student);
				console.log('req session:', req.session);
				return res.json({data:student});
			});
		})(req,res,next);
	});

	app.post('/logoutStudent', function(req,res){
		console.log('logging out ', req.session.passport.student);
		req.logOut();
		console.log('are they still logged in?', req.isAuthenticated());
		res.send(200);
	})

	//route to test if the user is logged in or not
	app.get('/loggedinStudent', function(req, res){
		console.log('loggedin?', req.isAuthenticated());
		return res.json(req.isAuthenticated() ? req.student : null);
	});

	// INSTRUCTORS
	app.post('/loginInstructor', function(req, res, next){
		passport.authenticate('local', function(err, instructor, info){
			if(err){return next(err);}
			if(!instructor) {
				console.log('Incorrect instructor pass combo!');
				return res.json({err: 'Invalid email and/or password combination!'});
			}
			req.logIn(instructor, function(err){
				if(err){ return next(err);}
				console.log('success');
				console.log(req.isAuthenticated());
				console.log(req.instructor);
				console.log('req session:', req.session);
				return res.json({data:instructor});
			});
		})(req,res,next);
	});

	app.post('/logoutInstructor', function(req,res){
		console.log('logging out ', req.session.passport.instructor);
		req.logOut();
		console.log('are they still logged in?', req.isAuthenticated());
		res.send(200);
	})

	//route to test if the user is logged in or not
	app.get('/loggedinInstructor', function(req, res){
		console.log('loggedin?', req.isAuthenticated());
		return res.json(req.isAuthenticated() ? req.instructor : null);
	});
}