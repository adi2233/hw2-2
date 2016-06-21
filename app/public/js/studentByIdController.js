var showStudentById = angular.module('showStudentById',['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/showById.html/', {
            controller: 'showStudById'
        });
             $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    })
showStudentById.controller('showStudById',['$scope','$http', '$location',function($scope,$http, $location) {
     $http.get("http://localhost:3000/studentsById/"+ $location.search().idstud).success(function(data){
        $scope.studentByIdController = data; 
        console.log(data);
    });
}]);

