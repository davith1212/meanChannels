var passport = require('passport');
module.exports = (function(){
	return{
		studentLogin: function(req, res, next){
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
		},
		studentLogout: function(req,res){
			console.log('logging out ', req.session.passport.student);
			req.logOut();
			console.log('are they still logged in?', req.isAuthenticated());
			res.send(200);
		},
		studentActive: function(req, res){
			console.log('loggedin?', req.isAuthenticated());
			return res.json(req.isAuthenticated() ? req.student : null);
		},
		instructorLogin: function(req, res, next){
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
		},
		instructorLogout: function(req,res){
			console.log('logging out ', req.session.passport.instructor);
			req.logOut();
			console.log('are they still logged in?', req.isAuthenticated());
			res.send(200);
		},
		instructorActive: function(req, res){
			console.log('loggedin?', req.isAuthenticated());
			return res.json(req.isAuthenticated() ? req.instructor : null);
		}
	}
})();