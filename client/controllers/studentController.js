var myApp = angular.module('myApp');

myApp.controller('studentController', function ($scope, studentFactory) {
        studentFactory.studentIndex (function (data) {
            $scope.students = data;
        })
        $scope.createStudent = function () {
            var student = {
                firstName: $scope.student.firstName,
                lastName: $scope.student.lastName,
                email: $scope.student.email,
                password: $scope.student.password
            }
            studentFactory.createStudent (student, function () {
                studentFactory.studentIndex (function (data) {
                    $scope.student ='',
                    $scope.students = data;
                })
            })
        }
        $scope.removeStudent = function (student) {
            studentFactory.removeStudent (student, function () {
                studentFactory.studentIndex (function (data) {
                    $scope.students = data;
                })
            })
        }
    })