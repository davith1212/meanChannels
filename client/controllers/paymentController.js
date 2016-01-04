var myApp = angular.module('myApp');
    myApp.controller('paymentController', function ($scope, paymentFactory) {
        paymentFactory.paymentIndex (function (data) {
            $scope.payments = data;
        })
        $scope.getPayment = function () {
            var payment = {
                payment: $scope.newPayment.payment
            }
            console.log(payment, "payment in front");
            paymentFactory.getPayment (payment, function ()  {
                paymentFactory.paymentIndex (function (data) {
                    console.log(data, "before scope end");
                    $scope.newPayment.payment = ''
                    $scope.payments = data;
                })
            })
        }
        $scope.removeData = function () {
            paymentFactory.removeData (function () {
                paymentFactory.paymentIndex (function (data) {
                    console.log('remove scope');
                    $scope.payments = data;
                })
            })
        }
    })