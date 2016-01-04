var classes = require('./../controllers/Classes.js');
var instructors = require('./../controllers/Instructors.js');
var login = require('./../controllers/Login.js');
var payments = require('./../controllers/Payments.js');
var students = require('./../controllers/Students.js');

module.exports = function (app) {
	app.get('/applyIndex', instructors.show)
	app.post('/createApplicant', instructors.add)
	app.post('/removeData', payments.remove)
	app.post('/getPayment', payments.add)
	app.get('/paymentIndex', payments.show)
	//Students
	app.get('/studentIndex', students.show)
	app.post('/createStudent', students.add)
	app.post('/removeStudent', students.remove)
	//Classes
	app.get('/classIndex', classes.show)
	app.post('/addClass', classes.add)
	app.post('/removeClass', classes.remove)

	//local auth route
		// STUDENTS
	app.post('/loginStudent', login.studentLogin);
	app.post('/logoutStudent', login.studentLogout);
			//route to test if the user is logged in or not
	app.get('/loggedinStudent', login.studentActive);

		// INSTRUCTORS
	app.post('/loginInstructor', login.instructorLogin);
	app.post('/logoutInstructor', login.instructorLogout)
		//route to test if the user is logged in or not
	app.get('/loggedinInstructor', login.instructorActive);
}