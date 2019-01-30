invent.controller("modelController",function($scope, modelService, $location, $route){
    
    $scope.header = {name :"header.html", url : "templates/header.html"};
    $scope.footer = {name :"footer.html", url : "templates/footer.html"};
    $scope.$route = $route;
    $scope.car = {};
    
    $scope.getManufacturer = function(){
        modelService.getManufacturer($scope.car);
    };
    $scope.getManufacturer();
    
    $.validator.setDefaults({
        ignore: []        
    });
    
    $scope.adviserPost = {};
    var $validator = $("#add_models").validate({
        rules :{
            manufacturer :{required :true},
            model_name: {required :true, maxlength: 20}
        },
        messages :{
            manufacturer:{
                required :'Please Select Manufacturer Name'
            },
            model_name: {
                required :'Please Enter Model Name',
                maxlength: "Maximum Length Of Model Name should Be 20 Characters Long"
            }
        },
        showErrors: function (errorMap, errorList) {
            $("#add_models").find("input").each(function () {
                $(this).removeClass("error");
            });
            $(".notes").css("color","red");
            $(".notes").html("");
            if (errorList.length) {
               $(".notes").html(errorList[0]['message']);
               $(errorList[0]['element']).addClass("error");
            }
        },
        submitHandler : function(form,message){
            $scope.addModel();
        }
    });
    
    $scope.addModel = function(){
        modelService.addModel($scope.car);
    };
    
    $scope.getModel = function(){
        modelService.getModel($scope.car);
    };
 
    var $validator = $("#add_car").validate({
           rules :{
               manufacturer :{required :true},
               model_name :{required :true},
               color :{required :true, maxlength: 10},
               man_year :{required :true, minlength:4, maxlength: 4, number: true},
               registration_no :{required :true, minlength:10, maxlength: 15, number: true},
               notes :{required :true, maxlength: 100},
               'photo[]': {
                   extension: "jpg|jpeg|png"
               }
           },
           messages :{
               manufacturer :{
                   required : "Please select manufacturer"
               },                
               model_name :{
                   required : "Please select model"
               },
               color :{
                   required : "Please enter color",
                   maxlength: "Maximum length of color should be 50 characters long"
               },
               man_year :{
                   required : "Please enter manufacturing year",
                   minlength: "Manufacturing year must be 4 digits long",
                   maxlength: "Manufacturing year must be 4 digits long",
                   number: "Manufacturing year must be numeric"
               },
               registration_no :{
                   required : "Please enter registration number",
                   minlength: "Minimum length of registration number should be 10 digits long",
                   maxlength: "Maximum length of registration number should be 15 digits long",
                   number: "Registration number must be numeric"
               },
               notes :{
                   required :"Please enter notes",
                   maxlength: "Maximum length of notes should be 100 characters long",
               },
               'profile_pic[]': {
                   extension: "Please select valid file"
               }
           },
           showErrors: function (errorMap, errorList) {
               $("#add_car").find("input").each(function () {
                   $(this).removeClass("error");
               });
               $(".notes").css("color","red");
               $(".notes").html("");
               if (errorList.length) {
                  $(".notes").html(errorList[0]['message']);
                  $(errorList[0]['element']).addClass("error");
               }
           },
           submitHandler : function(form,message){
               $scope.submitCar();
           }
    });

   $scope.car.car_pic = [];
   var formdata2 = new FormData();
   $scope.getFileProfile = function (e) {
       $scope.car.car_pic = [];
       formdata2.delete("car_pic");
       $scope.$apply(function () {
           for (var i = 0; i < e.files.length; i++) {
               $scope.car.car_pic.push(e.files[i]);
           }
       });
   };

   $scope.submitCar = function(){
       for (var i in $scope.car.car_pic) {
           formdata2.append("car_pic", $scope.car.car_pic[i]);
       }
       modelService.submitCar(formdata2,$scope.car);
   }
 
    $scope.goBack = function(){
        history.back();
    }
});
