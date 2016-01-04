var myApp = angular.module('myApp');

    myApp.controller('applyController', function ($scope, applyFactory) {
        applyFactory.applyIndex (function (data) {
            $scope.applicants = data;
        })
        $scope.apply = function () {
            var applicant = {
                first_name: $scope.newApplicant.first_name,
                last_name: $scope.newApplicant.last_name,
                address1: $scope.newApplicant.address1,
                address2: $scope.newApplicant.address2,
                city: $scope.newApplicant.city,
                state: $scope.newApplicant.state,
                zip: $scope.newApplicant.zip,
                phone: $scope.newApplicant.phone,
                email: $scope.newApplicant.email,
                password: $scope.newApplicant.password,
                bday: $scope.newApplicant.bday,
                class_type: $scope.newApplicant.class_type,
                class_description: $scope.newApplicant.class_description,
                certified_yes: $scope.newApplicant.certified_yes,
                certified_no: $scope.newApplicant.certified_no,
                date_certified: $scope.newApplicant.date_certified,
                cert_type: $scope.newApplicant.cert_type,
                training_school: $scope.newApplicant.training_school,
                currently_teaching_yes: $scope.newApplicant.currently_teaching_yes,
                currently_teaching_no: $scope.newApplicant.currently_teaching_no,
                time_teaching: $scope.newApplicant.time_teaching,
                experience: $scope.newApplicant.experience,
                references: $scope.newApplicant.references
            }
            applyFactory.createApplicant (applicant, function (){
                console.log(applicant, 'front end');
                applyFactory.applyIndex (function (data) {
                    $scope.newApplicant = '';
                    $scope.applicants = data;
                })
            })
        }
    })