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
    factory.removeStudent = function (callback) {
        $http.post('/removePost').success(function(student) {
            callback(student);
        })
    }
    return factory;
})