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
    $scope.remove = function() {
      var fileName = $(".file-name").text();
      
      var fileIndex = $.inArray(fileName, $scope.files);
      
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

        if($.inArray(fileName, $scope.files) != -1)
        {
          
        }
        else
        {
          $scope.add(fileName);
        }
        
        $(".modal-box").addClass("hidden");
    };
 }); 



