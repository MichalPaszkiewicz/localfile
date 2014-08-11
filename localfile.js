//angular.module('localfile', [])
  //.controller('localFileController', ['$scope', function($scope) {
    //$scope.files = [];
    
    //for(var i = 0; i < localStorage.length; i++){ 
    //  $scope.files.push(localStorage.key(i))
    //}

  //}]);
  
  function getFiles(){
    var results = [];
    
    for(var i = 0; i < localstorage.length; i++)
    {
      results.push(localstorage.key(i));
    }    
    
    return results;
  }
