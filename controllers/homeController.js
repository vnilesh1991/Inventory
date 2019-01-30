invent.controller("homeController",function($scope, homeService, $route){
    
    $scope.header = {name :"header.html", url : "templates/header.html"};
    $scope.footer = {name :"footer.html", url : "templates/footer.html"};
    $scope.$route = $route;
    
    $.validator.setDefaults({
        ignore: []        
    });
    jQuery.validator.addMethod("alphaspaces", function(value, element) {
        return this.optional(element) || value == value.match(/^[-a-zA-Z ./,_]+$/);
    }, "Only letters, spaces are allowed.");
    
    $scope.adviserPost = {};
    var $validator = $("#manufact_form").validate({
        rules :{
            manufacturer :{required :true, maxlength: 20, alphaspaces: true}
        },
        messages :{
            manufacturer:{
                required :'Please Enter Manufacturer Name',
                maxlength: "Maximum Length Of Manufacturer should Be 20 Characters Long",
                alphaspaces: "Only Letters Are Allowed For Manufacturer Name"
            }
        },
        showErrors: function (errorMap, errorList) {
            $("#manufact_form").find("input").each(function () {
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
            $scope.addManufacturer();
        }
    });
    
    $scope.car = {};
    $scope.addManufacturer = function(){
        homeService.addManufacturer($scope.car);
    };

});
