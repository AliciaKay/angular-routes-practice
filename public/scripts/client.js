var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProdiver) {  
    $routeProvider.when('/', {  
    templateUrl: 'views/home.html',
    controller: 'HomeController as HC'
}).otherwise({redirectTo: '/'});
});