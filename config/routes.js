invent.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl : "templates/home.html",
        controller : "homeController",
        activetab : "manufacturer"
    })
    .when("/models",{
        templateUrl : "templates/models.html",
        controller : "modelController",
        activetab : "models"
    })
    .when("/add-car",{
        templateUrl : "templates/add-car.html",
        controller : "modelController",
        activetab : "models"
    })
    .when("/display",{
        templateUrl : "templates/display.html",
        controller : "displayController",
        activetab : "display"
    })
    .otherwise({redirectTo : "/"});
});