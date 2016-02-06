var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/info.html',
            title: 'meanCHANNELS',
            css:'info'
        })
        .when('/students', {
            templateUrl: 'partials/students.html',
        	title: 'Students',
        	controller:'studentController',
        	css:'students'
        })            
        .when('/instructor', {
            templateUrl: 'partials/instructors.html',
            title: 'Instructors',
            css: 'instructors'
        })
        .when('/apply', {
            templateUrl: 'partials/apply.html',
            controller: 'instructorController',
            title:'Apply Now!',
            css:'apply'
        })
        .when('/stripe', {
            templateUrl: 'partials/payment.html',
            controller: 'paymentController',
            title:'Payment',
            css:'payment'
        })
        .when('/studentHome', {
            templateUrl: 'partials/studentHome.html',
            controller: 'classController',
            title:'Home - student',
            css:'studentHome'
        })
        .when('/instructorHome', {
            templateUrl: 'partials/instructorHome.html',
            controller: 'instructorController',
            title:'Home - instructor',
            css:'instructorHome'
        })
        .when('/pop', {
            templateUrl: 'partials/populateData.html',
            controller: 'classController'
        })
        .when('/studentVideo', {
            templateUrl: 'partials/studentVideo.html',
            controller: 'studentVideoController',
            title: 'Instructor Video'
        })
        .when('/studentVideoTest', {
            templateUrl: 'partials/studentVideoTest.html',
            controller: 'studentVideoControllerTest'
        })
        .otherwise({
            redirectTo: '/'
        }) 
})


myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {
            $rootScope.title = current.$$route.title;
            $rootScope.css = current.$$route.css;
        }
    });
}]);