$(function() {
$("#submit_form").click(function(e){
var li1a= $("#element_1_1").val();
 var li1b= $("#element_1_2").val();
var li2= $("#element_2").val();
var li28= $("#element_28").val();
var li31= $("#element_31").val();
var li43= $("#element_43").val();
var li4= $("#element_4").val();
var li5= $("#element_5").val();
var li44= $("#element_44").val();
var li33a= $("#element_50_1").val();
  var li33c= $("#element_50_3").val();
  var li33d= $("#element_50_4").val();
  var li33e= $("#element_50_5").val();
  var li33f= $("#element_50_6").val();
var li45= $("#element_45").val();
 var li53= $("#element_53").val();
 
 var mm8=$("#element_8_1").val();
var dd8=$("#element_8_2").val();
var yy8=$("#element_8_3").val();
var li8=mm8+"/"+dd8+"/"+yy8;
 
 var mm9=$("#element_9_1").val();
var dd9=$("#element_9_2").val();
var yy9=$("#element_9_3").val();
var li9=mm9+"/"+dd9+"/"+yy9;
 
  var mm7=$("#element_47_1").val();
var dd7=$("#element_47_2").val();
var yy7=$("#element_47_3").val();
var li7=mm7+"/"+dd7+"/"+yy7;
 
var querystring ="&element_1_1="+li1a+"&element_1_2="+li1b+"&element_2="+li2+"&element_28="+li28+"&element_31="+li31+"&element_43="+li43+"&element_4="+li4+"&element_5="+li5+"&element_44="+li44+"&element_33_1="+li33a+"&element_33_3="+li33c+"&element_33_4="+li33d+"&element_33_5="+li33e+"&element_33_6="+li33f+"&element_50="+li8+"&element_51="+li9+"&element_45="+li45+"&element_53="+li7+"&element_57="+li53;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=209011"+querystring;
$("#element_46").val(url);
});
});
