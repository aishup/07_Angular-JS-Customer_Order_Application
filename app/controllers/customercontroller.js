
	app.controller('customercontroller', function($scope,customersFactory,appsettings) {
      $scope.customer = [];
      $scope.appsettings = appsettings;
      function init() {
        $scope.customer = customersFactory.getCustomers();
      }
      init();

               });




