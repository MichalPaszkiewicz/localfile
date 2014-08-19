 var f = [];//{};
 
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

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

for(i = 0; i < localStorage.length; i++)
{
  //f[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  f.push({ name : localStorage.key(i), pic : getPic(localStorage.key(i)) });
}

function getPic(item)
{
    if(item.endsWith(".js"))
    {
      return "http://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
    }
    else if(item.endsWith(".cs"))
    {
      return "http://www.xappsoftware.com/wordpress/wp-content/uploads/2014/07/csharp3.png";
    }
    else if(validateEmail(item))
    {
      return "http://www.gravatar.com/avatar/" + item;
    }
    else
    {
      return "https://lh5.ggpht.com/-4y8XgooGfuM-Z-rYE9xqoalqQGFPlaBlRR8dfUG-aMB3rIMUaEkrX95XOlzLQ0_9FE=w300";
    }
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




