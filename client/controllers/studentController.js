var myApp = angular.module('myApp');

myApp.controller('studentController', function ($scope, studentFactory) {
        studentFactory.studentIndex (function (data) {
            $scope.students = data;
        })
        $scope.createStudent = function () {
            var newStudent = {
                firstName:  $scope.newStudent.firstName,
                lastName:   $scope.newStudent.lastName,
                email:      $scope.newStudent.email,
                password:   $scope.newStudent.password
            }
            studentFactory.createStudent (newStudent, function () {
                studentFactory.studentIndex (function (data) {
                    $scope.newStudent ={};
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
        $scope.loginStudent = function(input){
            console.log('inStuCtrl');
            //call factory
            studentFactory.loginStudent(input, function(response){
                if(response.err){
                    console.log('there was an error!');
                    $scope.error.message = response.err;
                } else {
                    console.log('no error, log them in');
                    $location.url('/info');
                }
            })
            $scope.studentData = {};
        }
        $scope.addStudent = function() {
            studentFactory.addStudent (function () {
                studentFactory.addStudentShow (function (data) {
                    $scope.students = data;
                })
            })
        }
    })