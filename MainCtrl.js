app.controller('MainCtrl', function($scope) {

	$scope.product = [];
	$scope.total=0;
	
    
    $scope.submitDetails = function() {
        console.log("Credentials:: " + JSON.stringify($scope.credentials))
        console.log("Detail:: " + JSON.stringify($scope.detail))
    };

});
