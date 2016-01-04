var myApp = angular.module('myApp');

myApp.controller('instructorController', function ($scope, instructorFactory) {
    instructorFactory.instructorIndex (function (data) {
        $scope.instructors = data;
    })
    $scope.createInstructor = function () {
        var newInstructor = {
            first_name:             $scope.newInstructor.first_name,
            last_name:              $scope.newInstructor.last_name,
            address1:               $scope.newInstructor.address1,
            address2:               $scope.newInstructor.address2,
            city:                   $scope.newInstructor.city,
            state:                  $scope.newInstructor.state,
            zip:                    $scope.newInstructor.zip,
            phone:                  $scope.newInstructor.phone,
            email:                  $scope.newInstructor.email,
            password:               $scope.newInstructor.password,
            bday:                   $scope.newInstructor.bday,
            class_type:             $scope.newInstructor.class_type,
            class_description:      $scope.newInstructor.class_description,
            certified_yes:          $scope.newInstructor.certified_yes,
            certified_no:           $scope.newInstructor.certified_no,
            date_certified:         $scope.newInstructor.date_certified,
            cert_type:              $scope.newInstructor.cert_type,
            training_school:        $scope.newInstructor.training_school,
            currently_teaching_yes: $scope.newInstructor.currently_teaching_yes,
            currently_teaching_no:  $scope.newInstructor.currently_teaching_no,
            time_teaching:          $scope.newInstructor.time_teaching,
            experience:             $scope.newInstructor.experience,
            references:             $scope.newInstructor.references
        }
        instructorFactory.createInstructor (newInstructor, function (){
            console.log('IN createinstructor');
            instructorFactory.instructorIndex (function (data) {
                $scope.newInstructor = {};
                $scope.instructors = data;
            })
        })
    }
    $scope.loginInstructor = function(input){
        instructorFactory.loginInstructor(input, function(response){
            if(response.err){
                console.log('there was an error!');
                $scope.error.message = response.err;
            } else {
                console.log('no error, log them in');
                $location.url('/info');
            }
        })
        $scope.instructorData = {};
    }
})