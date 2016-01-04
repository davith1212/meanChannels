var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/info.html',
        	title: 'Instructor Login',
        	css:'main'
        })
        .when('/students', {
            templateUrl: 'partials/students.html',
        	title: 'Students',
        	controller:'studentController',
        	css:'student'
        })            
        .when('/instructor', {
            templateUrl: 'partials/instructors.html'
        })
        .when('/apply', {
            templateUrl: 'partials/apply.html',
            controller: 'applyController',
            title:'Apply Now!'
        })
        .when('/stripe', {
            templateUrl: 'partials/payment.html',
            controller: 'paymentController'
        })
        .when('/studentHome', {
            templateUrl: 'partials/studentHome.html',
            controller: 'classController'
        })
        .when('/pop', {
            templateUrl: 'partials/populateData.html',
            controller: 'classController'
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