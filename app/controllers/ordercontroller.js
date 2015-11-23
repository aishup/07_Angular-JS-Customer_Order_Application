app.controller('ordercontroller', function($scope,customersFactory,$routeParams) { 
      var customerId = $routeParams.customerid;
      $scope.customer = [];
      function init() {
        $scope.customer = customersFactory.getOcustomers(customerId);
      }
      init();
 });