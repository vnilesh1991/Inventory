invent.directive('onFinishRender',['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatCompleted');
                    if(!!attr.onFinishRender){
                      $parse(attr.onFinishRender)(scope);
                    }
                });
            }
        }
    }
}]);
invent.controller("displayController",function($scope, displayService, $location, $route){
    
    $scope.header = {name :"header.html", url : "templates/header.html"};
    $scope.footer = {name :"footer.html", url : "templates/footer.html"};
    $scope.$route = $route;
    $scope.car = {};
    
    $scope.getCars = function(){
        displayService.getCars($scope.car);
    };
    $scope.getCars();
    
    $scope.$on('ngRepeatCompleted', function(ngRepeatFinishedEvent) {
        $('#cartbl').DataTable( {
            // "paging": true,
            // "bFilter": false
        });
    });
    
});
