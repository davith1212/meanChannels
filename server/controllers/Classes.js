var mongoose = require('mongoose');
//NEED CLASS MODEL
var Class = mongoose.model('Class');

module.exports = (function(){
	return{
		show: function (req, res) {
			Class.find({}, function (err, output) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("Class found!");	
					res.json(output);
				}
			})
		},
		add: function (req, res) {
			var xclass = new Class({
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
		remove: function (req, res) {
			Class.findOne({_id: req.body._id}, function (err, xclass) {
				Class.remove({_id: req.body._id}, function (err) {
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