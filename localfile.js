 var f = [];//{};
 
for(i = 0; i < localStorage.length; i++)
{
  //f[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  f.push({ name : localStorage.key(i), pic : getPic(localStorage.key(i)) });
}

function getPic()
{
  
  
}
 
 angular.module('app', []).controller('fileCtrl', function fileCtrl($scope) {
    $scope.files = f;
    $scope.add = function(item) {
      $scope.files.push({ name: item, pic: getPic(item) });
    };
    $scope.remove = function() {
      var fileName = $(".file-name").text();
      
      var fileIndex = $scope.files.contains("name", fileName);
      
      if(fileIndex != -1 )
      {
        $scope.files.splice(fileIndex, 1);
      }
      
      localStorage.removeItem(fileName);
      
      $(".modal-box").addClass("hidden");
    };
    $scope.save = function(){
        var fileName = $(".file-name").text();
        localStorage.setItem(fileName,$(".file-content").text());

        if($scope.files.contains("name", fileName) != -1)
        {
          
        }
        else
        {
          $scope.add(fileName);
        }
        
        $(".modal-box").addClass("hidden");
    };
 }); 

Array.prototype.contains = function (key, expectedValue) {
    // if the other array is a falsy value, return
    if (!this || this.length < 1)
        return -1;
    
    for (var i = 0; i < this.length; i++) {
      if(this[i][key] == expectedValue)
      {
        return $.inArray(this[i], this);
      }
    }       
    
    return -1;
} 


