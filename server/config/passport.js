var mongoose = require('mongoose');
var passport = require('passport');
var passportLocal = require('passport-local');
var student = mongoose.model('student');
//teach passport how to verify local studentEmail and credentials
passport.use(new passportLocal.Strategy(
  { usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done){
    student.findOne({ email: username},
      function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.validPassword(password)){return done(null, false)}
        return done(null, user); //there is a record
    });
}));

//teach passport how to serialize and deserialize users
//passport will invoke this function for us
passport.serializeUser(function(user, done){
  console.log('serializing');
  done(null, user.id);
});
passport.deserializeUser(function(id, done){
  //give the id back when they come back
  //query database or cache here!
  console.log('deserializing');
  // done(null, {id:  id, name: id});
  console.log(id);
  student.findOne({_id: id}, function(err, user){
    console.log(user);
    done(null, user);
  });
});
