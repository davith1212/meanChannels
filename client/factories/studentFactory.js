var myApp = angular.module('myApp');
    myApp.factory('studentFactory', function($http) {
        var factory = {};

        factory.studentIndex = function (callback) {
            $http.get('/studentIndex').success(function(output) {
                students = output;
                callback(students);
            })
        }
        factory.createStudent = function (data, callback) {
            $http.post('/createStudent', data).success(function (student) {
                callback(student);
            })
        }
        factory.loginStudent = function(input, callback){
            student = {};
            error = {};
            console.log('inStuFctry');
            console.log('factory trying to log in with', input);
            $http.post('/loginStudent', input).then(function(response){
                console.log(response);
                if(response.data.err){
                    error.message = response.data.err;
                    console.log('ERROR!', error);
                    callback(response.data);
                } else {
                    student = response.data.data;
                    callback(response.data.data);
                }
            })
        }        
        factory.removeStudent = function (callback) {
            $http.post('/removeStudent').success(function(student) {
                callback(student);
            })
        }
        factory.addStudent = function (data, callback) {
            $http.post('/addStudent').success(function(student) {
                callback(student);
            })
        }
        return factory;
    })