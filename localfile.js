  
  function getFiles(){
    var results = [];
    
    for(var i = 0; i < localStorage.length; i++)
    {
      results.push(localStorage.key(i));
    }    
    
    return results;
  }
  
  
function fileCtrl($scope) {

 $scope.files = getFiles();
 
 
 }}

