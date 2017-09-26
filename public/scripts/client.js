var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProdiver) {
    $routeProvider.when('/', {                    
       templateUrl: 'views/home.html',
       controller: 'HomeController as HC'
   }).when('/controllerA', {
       templateUrl: 'views/controllerA.html',
       controller: 'ControllerA as CA'
   }).when('/controllerB', {
       templateUrl: 'views/controllerB.html',
       controller: 'Controllerb as CB'
   }).otherwise({redirectTo: '/'});
   
    $locationProvider.html5Mode(true);
   });