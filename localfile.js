  
var f = {"one":"two"};

for(i = 0; i < localStorage.length; i++)
{
  f[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
}
  
function fileCtrl($scope) {
 $scope.files = f;
}

