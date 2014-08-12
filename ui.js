$(function() {

$(".file-box.existing").click(function(){ 
  
  var titleText = $(this).children("span").text().replace(" ","");
  var newText = localStorage.getItem(titleText);
  
  $(".file-name").html(titleText);
  $(".file-content").html(newText);
  $('.file-name').attr('contenteditable','false');

  $(".modal-box").removeClass("hidden");
});

$(".add-file").click(function(){
  
    $(".file-name").html("Untitled");
    $('.file-name').attr('contenteditable','true');
    $(".file-content").html("");

  $(".modal-box").removeClass("hidden");
  
});

$('.modal-box').on('click', '.close', function() {
  $(".modal-box").addClass("hidden");
  //location.reload();
});


$(".file-content").keyup(function(){
 
 localStorage.setItem($(".file-name").text(),$(".file-content").text());

});

});
