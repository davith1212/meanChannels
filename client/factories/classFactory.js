var myApp = angular.module('myApp');
    myApp.factory('classFactory', function ($http) {
        var factory = {}

        factory.classIndex = function (callback) {
            $http.get('/classIndex').success(function (xclass) {
                callback(xclass);
            })
        }
        factory.addClass = function (data, callback){
            $http.post('/addClass', data).success( function (xclass) {
                callback(xclass);
            })
        }
        factory.removeClass = function (callback) {
            $http.post('/removeClass').success( function (xclass) {
                callback(xclass);
            })
        }
        return factory;
    })