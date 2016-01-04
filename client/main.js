var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'static/partials/info.html',
            // controller:
           title: 'Instructor Login'
        })
        .when('/students', {
            templateUrl: 'static/partials/students.html'
        })            
        .when('/instructor', {
            templateUrl: 'static/partials/instructors.html'
        })
        .when('/apply', {
            templateUrl: 'static/partials/apply.html'
        })
        .when('/stripe', {
            templateUrl: 'static/partials/payment.html'
        })
        .when('/studentHome', {
            templateUrl: 'static/partials/student_Home.html'
        })
        .otherwise({
            redirectTo: '/'
        }) 
})


myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);