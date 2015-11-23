//Steps
//1. Create the module customersApp and reference the dependent route module 'ngRoute'
//2. Configure the route using the syntax module.cofig(). 
//   $routeProvider is automatically injected by the module 'ngRoute' and use it in the module 'app'.
//   $routeProvide will have the 'path',controller name and view (html link).
// Notes to remember
//   controller is already referenced in the main html by using ng-app.
//   controller is referenced in the view using the $scope variable
//   $routeProvider marries the controller and view.

//creation of the module
 
  var app = angular.module('customersApp',['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider 
    .when('/', {
            controller  : 'customercontroller',
            templateUrl :'app/views/customers.html'
          })
    .when('/order/:customerid', {
            controller  : 'ordercontroller',
            templateUrl : 'app/views/orders.html'
      })
    .otherwise({redirectTo:'/'});          
  });