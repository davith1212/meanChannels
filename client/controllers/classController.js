var myApp = angular.module('myApp');
 myApp.controller('classController', function ($scope, classFactory) {
        classFactory.classIndex( function (data) {
            $scope.classes = data;
        })
        $scope.addClass = function () {
            var xclass = {
                name: $scope.xclass.name,
                date: $scope.xclass.date,
                type: $scope.xclass.type,
                description: $scope.xclass.description,
                size: 20
            }
            classFactory.addClass (xclass, function () {
                classFactory.classIndex (function (data) {
                    $scope.xclass = {};
                    $scope.classes = data;
                })
            })
        }
        $scope.removeClass = function () {
            classFactory.removeClass (function () {
                classFactory.classIndex (function (data) {
                    $scope.classes = data;
                })
            })
        }
    })