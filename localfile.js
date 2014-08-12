 var f = {};
 
for(i = 0; i < localStorage.length; i++)
{
  f[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
}
 
 angular.module('app', []).controller('fileCtrl', function fileCtrl($scope) {
         $scope.files = f;
    }); 



