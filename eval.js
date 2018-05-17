$(function() {
$("#submit_form").click(function(e){
var li4a= $("#element_4_1").val();
 var li4b= $("#element_4_2").val();
var li5= $("#element_5").val();
var li19= $("#element_19").val();
var li12= $("#element_12").val();
var li18= $("#element_18").val();
var li6= $("#element_6").val();
var li9= $("#element_9").val();
var li13= $("#element_13").val();
var li16= $("#element_16").val();
  var li7= $("#element_7").val();
  var li8= $("#element_8").val();
  var li12= $("#element_12").val();
  var li15= $("#element_15").val();


 
var querystring ="&element_4_1="+li4a+"&element_4_2="+li4b+"&element_5="+li5+"&element_19="+li19+"&element_12="+li12+"&element_18="+li18+"&element_6="+li6+"&element_9="+li9+"&element_13="+li13+"&element_16="+li16+"&element_27="+li7+"&element_28="+li8+"&element_29="+li12+"&element_31="+li15;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=212769"+querystring;
$("#element_27").val(url);
});
});
