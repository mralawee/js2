$(function() {
  $("#element_24").each(function(){
var querystring = $("#element_24").val();
querystring = querystring.replace(/-/,'\n');
$("#element_24").val(querystring);
});
});