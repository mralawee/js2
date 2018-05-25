$(function() {
$("#submit_form").click(function(e){
var li4a= $("#element_1").val();
var querystring ="&element_6="+li4a;
querystring = querystring.replace(/"/g,'@');
var url = "https://okstate.forms-db.com/view.php?id=223182"+querystring;
$("#element_6").val(url);
});
});
