$(function() {
$("#submit_form").click(function(e){
var lastName= $("#element_1").val();
var querystring ="&element_1="+lastName;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=207204"+querystring;
$("#element_2").val(url);
});
});
