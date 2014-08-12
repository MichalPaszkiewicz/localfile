$(function() {

$(".file-box.existing").click(function(){ 
  
  var newText = localStorage.getItem($(this).children("span").text().replace(" ",""));
  
  $(".file-details").text(newText);
  
  $(".file-details").prepend("<div class='close'>Close</div>");
  
  $(".modal-box").removeClass("hidden");
})

$('.modal-box').on('click', '.close', function() {
  $(".modal-box").addClass("hidden");
});

});
