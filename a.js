$(function() {
$("#submit_form").click(function(e){
var li1= $("#element_1").val();
var li2= $("#element_2").val();
  var li28= $("#element_28").val();
var li31= $("#element_31").val();
  var li3= $("#element_3").val();
var li4= $("#element_4").val();
  var li5= $("#element_5").val();
var li6= $("#element_6").val();
  var li33= $("#element_33").val();
  var li8= $("#element_8").val();
var li9= $("#element_9").val();
  var li35= $("#element_35").val();
var li21= $("#element_21").val();
  var li12= $("#element_12").val();
var li27= $("#element_27").val();
var querystring ="&element_1="+li1+"&element_2="+li2+"&element_28="+li28+"&element_3="+li3+"&element_4="+li4+"&element_5="+li5+"&element_6="+li6+"&element_33="+li33+"&element_8="+li8+"&element_9="+li9+"&element_35="+li35+"&element_21="+li21+"&element_1="+li1+"&element_2="+li2+"&element_12="+li12+"&element_27="+li27;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=207204"+querystring;
$("#element_36").val(url);
});
});
