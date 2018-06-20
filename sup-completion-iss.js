$(function() {
  $("#submit_form").click(function(e){
var querystring = $("#element_24").val();
querystring = querystring.replace(/-/,'\n');
$("#element_24").val(querystring);
});
});
