var showStudentByYear = angular.module('showStudentByYear',['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/showByYear.html/', {
            controller: 'showStudByYear'
        });
             $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    })
showStudentByYear.controller('showStudByYear',['$scope','$http', '$location',function($scope,$http, $location) {
     $http.get("http://localhost:3000/studentsByYear/"+ $location.search().year).success(function(data){
        $scope.studentByYearController = data; 
        console.log(data);
    });
}]);

