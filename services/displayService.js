invent.service("displayService",function($http, URL){
    
    this.getCars = function(car){
        $http({
            url: URL + 'get-cars',
            method: 'POST',
            headers: {'Content-Type': undefined }
        }).success(function(res){
            car.carlist = res.cars;
            
        });
    };
});