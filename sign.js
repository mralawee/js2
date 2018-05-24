$(function() {
$("#submit_form").click(function(e){
var li4a= $("#element_1").val();

 
var querystring ="&element_4="+li4a;
querystring = querystring.replace(/"/g,"@");
var url = "https://okstate.forms-db.com/view.php?id=221646"+querystring;
$("#element_2").val(url);
});
});
