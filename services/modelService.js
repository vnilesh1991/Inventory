invent.service("modelService",function($http, URL){
    
    this.getManufacturer = function(car){
        $http({
            url: URL + 'get-manufacturer',
            method: 'POST',
            headers: {'Content-Type': undefined }
        }).success(function(res){
            car.mflist = res.manufacturer;
        });
    };
    
    this.addModel = function(car){
        $(".notes").html('Adding Model...');
        $http({
            url: URL + 'add-model',
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
                car.manufacturer=''; car.model_name='';
                $("#manufacturer").val(''); $("#model_name").val('');
                $(".notes").html('');
            },2000);
        });
    };
    
    this.getModel = function(car){
        $http({
            url: URL + 'get-models',
            method: 'POST',
            headers: {'Content-Type': undefined },
            data: car
        }).success(function(res){
            console.log(res)
            car.mdl = res.models;
        });
    };
     
    this.submitCar = function(formdata,car){
        $(".notes").html('Adding Car...');
        formdata.append('other',JSON.stringify(car));
        $http({
            url: URL + 'add-car',
            method: 'POST',
            headers: {'Content-Type': undefined },
            data: formdata
        }).success(function(res){
//            console.log(res);
            formdata.delete("other");
            formdata.delete("car_pic");
            if(res.flag){
               $(".notes").css("color","green"); 
            }else{
               $(".notes").css("color","red");
            }
            $(".notes").html(res.msg);
            setTimeout(function(){
                car.registration_no=''; car.notes='';
                car.man_year=''; car.color='';
                car.model_name=''; car.manufacturer='';
                $("#manufacturer").val(''); $("#model_name").val('');
                $("#color").val(''); $("#man_year").val('');
                $("#registration_no").val(''); $("#notes").val('');
                $("#car_pic").val('');
                $(".notes").html('');
            },2000);
        });
    };
});