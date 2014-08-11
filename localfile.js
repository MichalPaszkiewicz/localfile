//angular.module('localfile', [])
  //.controller('localFileController', ['$scope', function($scope) {
    //$scope.files = [];
    
    //for(var i = 0; i < localStorage.length; i++){ 
    //  $scope.files.push(localStorage.key(i))
    //}

  //}]);
  
  function getFiles(){
    var results = [];
    
    for(var i = 0; i < localStorage.length; i++)
    {
      results.push(localStorage.key(i));
    }    
    
    return results;
  }

var blah = getFiles();
