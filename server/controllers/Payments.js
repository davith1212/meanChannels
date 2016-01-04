var mongoose = require('mongoose');
var Payment = mongoose.model('Payment');
module.exports = (function(){
	return{
		add: function (req, res) {
			var payment = new Payment ({
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
		show: function (req, res) {
				Payment.find({}, function (err, output) {
					if(err) {
						console.log(err);
					}
					else {
						res.json(output);
					}
				})

		},
		remove: function (req, res) {
			Payment.remove({}, function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log('removed all');
					res.json(200);
				}
			})
		}
	}
})();