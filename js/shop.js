$(document).ready(function(){

$(".what").click(function(){
$(".overlay").show();
$(".close").click(function(){
$(".overlay").hide();

  
});
});


  
$("#plus").click(function() {
  if ($("#name").val() ==="") {
    $(".Write").show();
  }

  else {

  var newItem = $("#name").val();
 $(".List").append("<li><input type='checkbox' class='checkbox'>" + newItem + "<span id='minus'>X</span></li>");
 $("#name").val("");
 $(".Write").hide();
    }
});   
});





$(document).keyup(function(e){
    if(e.keyCode == 13){
      $("#plus").click();
    };
  });

$(document).ready(function(){
$(".List" ).on("click",".checkbox", function() {
  if ($(this).is(':checked')) {
  
   $(this).closest("li").addClass("checked");
    $("#minus").show();
  }
  else {
    $(this).closest("li").removeClass("checked");
      $("#minus").hide();
  }
});
});

$(document).ready(function(){
$(".List").on("click", "#minus", function() {
 (".checkbox:checked"); 
$(".checkbox:checked").closest("li").remove();


});  
}); 