$(function() {
$("#submit_form").click(function(e){
var li16= $("#element_16").val();
 var li17= $("#element_17").val();
var li2= $("#element_2").val();
var li3= $("#element_3").val();

 var li4= $("#element_3").val();
 
// var mm4=$("#element_4_1").val();
//var dd4=$("#element_4_2").val();
//var yy4=$("#element_4_3").val();
//var li4=mm4+"-"+dd4+"-"+yy4;

var li23= $("#element_23").val();
var li18= $("#element_18").val();
var li19= $("#element_19").val();

var mm8=$("#element_8_1").val();
var dd8=$("#element_8_2").val();
var yy8=$("#element_8_3").val();
var li8=mm8+"/"+dd8+"/"+y8;

var li9= $("#element_9").val();

    var querystring ="&element_16="+li16+"&element_17="+li17+"&element_2="+li2+"&element_3="+li3+"&element_24="+li4+"&element_23="+li23+"&element_18="+li18+"&element_19="+li19+"&element_25="+li8+"&element_9="+li9;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=265336"+querystring;
$("#element_25").val(url);
});
});
