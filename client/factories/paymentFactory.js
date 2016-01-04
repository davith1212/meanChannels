var myApp = angular.module('myApp');

    myApp.factory('paymentFactory', function($http) {
        var factory = {};
        factory.paymentIndex = function (callback) { 
            $http.get('/paymentIndex').success(function(output) {
                payments = output;
                console.log(output, "index factory");
                callback(payments);
            })
        }
        factory.getPayment = function (data, callback) {
            $http.post('/getPayment', data).success(function (payment) {
                callback(payment);
            })
        }
        factory.removeData = function (callback) {
            $http.post('/removeData').success(function (payment) {
                callback(payment);
            })
        }
        return factory;
    })