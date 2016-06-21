var showStudent = angular.module('showStudent',[]);

showStudent.controller('showStud',['$scope','$http',function($scope,$http) {
     $http.get("http://localhost:3000/students").success(function(data){
        $scope.studentController = data; 
        console.log(data);
    });
}]);

