$(function() {
$("#submit_form").click(function(e){
var li1a= $("#element_1_1").val();
var li1b= $("#element_1_2").val();

var li2= $("#element_2").val();

var li3a= $("#element_3_1").val();
var li3c= $("#element_3_3").val();
var li3d= $("#element_3_4").val();
var li3e= $("#element_3_5").val();
var li3f= $("#element_3_6").val();

var ph1=$("#element_4_1").val();
var ph2=$("#element_4_2").val();
var ph3=$("#element_4_3").val();
var li4= ph1+"/"+ph2+"/"+ph3;

var mm5=$("#element_5_1").val();
var dd5=$("#element_5_2").val();
var yy5=$("#element_5_3").val();
var li5=mm5+"/"+dd5+"/"+yy5;

var li6= $("#element_6").val();

var li7= $("#element_7").val();

var li8= $("#element_8").val();

var li9= $("#element_9").val();

var li10= $("#element_10").val();

var li11= $("#element_11").val();

var li12= $("#element_12").val();

var li13= $("#element_13").val();
 

 
var querystring ="&element_1_1="+li1a+"&element_1_2="+li1b+"&element_2="+li2+"&element_3_1="+li3a+"&element_3_3="+li3c+"&element_3_4="+li3d+"&element_3_5="+li3e+"&element_3_6="+li3f+"&element_20="+li4+"&element_21="+li5+"&element_6="+li6+"&element_7="+li7+"&element_8="+li8+"&element_22="+li9+"&element_10="+li10+"&element_11="+li11+"&element_12="+li12+"&element_13="+li13;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=587125"+querystring;
$("#element_19").val(url);
});
});
