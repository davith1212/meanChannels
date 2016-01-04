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

	//local auth route
	app.post('/login', function(req, res, next){
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

	app.post('/logout', function(req,res){
		console.log('logging out ', req.session.passport.student);
		req.logOut();
		console.log('are they still logged in?', req.isAuthenticated());
		res.send(200);
	})

	//route to test if the user is logged in or not
	app.get('/loggedin', function(req, res){
		console.log('loggedin?', req.isAuthenticated());
		return res.json(req.isAuthenticated() ? req.student : null);
	});
}