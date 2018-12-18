$(function() {
  $("#element_1").focus();
 var le = $("#element_1").val().replace(/ /g,'').length
 
 if (le == 9) {
$( "#form_314034" ).submit() 
  window.history.back();
   $("#element_1").val('')
 }
  
});
