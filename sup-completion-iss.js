$(function() {
  $("#element_24").each(function(){
var querystring = $("#element_24").val();
querystring = querystring.replace(/\--/g,'\n');
$("#element_24").val(querystring);
});		
});
