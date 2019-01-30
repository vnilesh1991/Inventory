invent.service("homeService",function($http, URL){
    
    var comm = this;
    this.addManufacturer = function(car){
        $(".notes").html('Adding Manufacturer...');
        $http({
            url: URL + 'add-manufacturer',
            method: 'POST',
            headers: {'Content-Type': undefined },
            data: car
        }).success(function(res){
            if(res.flag){
               $(".notes").css("color","green"); 
            }else{
               $(".notes").css("color","red");
            }
            $(".notes").html(res.msg);
            setTimeout(function(){
                car.manufacturer='';
                $("#manufacturer").val('');
                $(".notes").html('');
            },2000);
        });
    };
});