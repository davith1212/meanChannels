var myApp = angular.module('myApp');

 myApp.factory('applyFactory', function($http) {
        var factory = {};

        factory.applyIndex = function (callback) {
            $http.get('/applyIndex').success(function(output) {
                applicants = output;
                console.log(applicants);
            })
        }
        factory.createApplicant = function (data, callback) {
            console.log('hi helloo');
            $http.post('/createApplicant', data).success( function (applicant) {
                callback(applicant);
            })
        }
        return factory;
    })