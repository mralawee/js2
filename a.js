$(function() {
$("#submit_form").click(function(e){
var li1a= $("#element_1_1").val();
  var li1b= $("#element_1_2").val();
var li2= $("#element_2").val();
var li28= $("#element_28").val();
var li31a= $("#element_31_1").val();
  var li31b= $("#element_31_2").val();
var li3= $("#element_3").val();
var li4= $("#element_4").val();
var li5= $("#element_5").val();
var li6a= $("#element_6_1").val();
  var li6b= $("#element_6_2").val();
var li33a= $("#element_33_1").val();
  var li33b= $("#element_33_2").val();
  var li33c= $("#element_33_3").val();
  var li33d= $("#element_33_4").val();
  var li33e= $("#element_33_5").val();
  var li33f= $("#element_33_6").val();
var li8a= $("#element_8_1").val();
  var li8b= $("#element_8_2").val();
  var li8c= $("#element_8_3").val();
var li9a= $("#element_9_1").val();
  var li9b= $("#element_9_2").val();
  var li9c= $("#element_9_3").val();
var li35= $("#element_35").val();
var li21= $("#element_21").val();
var li12a= $("#element_12_1").val();
var querystring ="&element_1_1="+li1a+"&element_1_2="+li1b+"&element_2="+li2+"&element_28="+li28+"&element_31_1="+li31a+"&element_31_2="+li31b+"&element_3="+li3+"&element_4="+li4+"&element_5="+li5+"&element_6_1="+li6a+"&element_6_2="+li6b+"&element_33_1="+li33a+"&element_33_2="+li33b+"&element_33_3="+li33c+"&element_33_4="+li33d+"&element_33_5="+li33e+"&element_33_6="+li33f+"&element_8_1="+li8a+"&element_8_2="+li8b+"&element_8_3="+li8c+"&element_9_1="+li9a+"&element_9_2="+li9b+"&element_9_3="+li9c+"&element_35_1="+li35a+"&element_35_2="+li35b+"&element_21="+li21+"&element_1="+li1+"&element_2="+li2+"&element_12_1="+li12a;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=209011"+querystring;
$("#element_36").val(url);
});
});
