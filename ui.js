$(function() {

/*
$(".panel-box").on('click',".file-box.existing", function(){ 
  
  var titleText = $(this).children("span").text().trim();
  var newText = localStorage.getItem(titleText);
  
  $(".file-name").html(titleText);
  $(".file-content").html(newText);
  $('.file-name').attr('contenteditable','false');

  $(".modal-box").removeClass("hidden");
});
*/

$(".add-file").click(function(){
  
    $(".file-name").html("Untitled");
    $('.file-name').attr('contenteditable','true');
    $(".file-content").html("");

  $(".modal-box").removeClass("hidden");
  
});

/*
function closeModal(){
    $(".modal-box").addClass("hidden");
}

$('.modal-box').on('click', '.close', function() {
  closeModal();
  //location.reload();
});
*/

//$('.modal-box').on('click', '.delete', function() {
//  localStorage.removeItem($(".file-name").text());
//  $(".modal-box").addClass("hidden");
  //location.reload();
//});


$(".file-content").keyup(function(){
 
 localStorage.setItem($(".file-name").text(),$(".file-content").text());

});

});
