  
var f = {"one":"two"};

var m = {
    "India": "2",
    "England": "2",
    "Brazil": "3",
    "UK": "1",
    "USA": "3",
    "Syria": "2"
};

for(i = 0; i < localStorage.length; i++)
{
  f[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
}
  
function fileCtrl($scope) {
 $scope.files = m;
}

