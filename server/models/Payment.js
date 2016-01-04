var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentSchema = new mongoose.Schema ({
    payment: Number
})
mongoose.model('Payment', PaymentSchema);

