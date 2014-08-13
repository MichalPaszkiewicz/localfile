 var f = [];//{};
 
for(i = 0; i < localStorage.length; i++)
{
  //f[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  f.push(localStorage.key(i));
}
 
 angular.module('app', []).controller('fileCtrl', function fileCtrl($scope) {
         $scope.files = f;
         $scope.add = function(item) {
          $scope.files.push(item);
         };
         $scope.remove = function(index) {
          data.push($scope.files.splice(index, 1)[0]);
         };
    }); 



