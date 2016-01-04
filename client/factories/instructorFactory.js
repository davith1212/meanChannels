var myApp = angular.module('myApp');
myApp.factory('instructorFactory', function($http) {
        var factory = {};

        factory.instructorIndex = function (callback) {
            $http.get('/instructorIndex').success(function(output) {
                instructors = output;
                console.log(instructors);
            })
        }
        factory.createInstructor = function (data, callback) {
            $http.post('/createInstructor', data).success( function (instructor) {
                callback(instructor);
            })
        }
        factory.loginInstructor = function(input, callback){
            instructor = {};
            error = {};
            $http.post('/loginInstructor', instructor).then(function(response){
                console.log(response);
                if(response.data.err){
                    error.message = response.data.err;
                    console.log('ERROR!', error);
                    callback(response.data);
                } else {
                    instructor = response.data.data;
                    callback(response.data.data);
                }
            })
        }        
        factory.removeInstructor = function (callback) {
            $http.post('/removeInstructor').success(function(instructor) {
                callback(instructor);
            })
        }

        return factory;
    })