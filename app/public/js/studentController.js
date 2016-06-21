var showStudent = angular.module('showStudent',[]);

showStudent.controller('showStud',['$scope','$http',function($scope,$http) {
     $http.get("https://hw2-2-server.herokuapp.com/students").success(function(data){
        $scope.studentController = data; 
        console.log(data);
    });
}]);

