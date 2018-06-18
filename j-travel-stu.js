$(function() {
$("#submit_form").click(function(e){
var li32a= $("#element_32_1").val();
 var li32b= $("#element_32_2").val();
var li29= $("#element_29").val();
var li33= $("#element_33").val();
var li2= $("#element_2").val();

var mm11=$("#element_11_1").val();
var dd11=$("#element_11_2").val();
var yy11=$("#element_11_3").val();
var li11=mm11+"/"+dd11+"/"+yy11;

var mm7=$("#element_7_1").val();
var dd7=$("#element_7_2").val();
var yy7=$("#element_7_3").val();
var li7=mm7+"/"+dd7+"/"+yy7;

var mm4=$("#element_4_1").val();
var dd4=$("#element_4_2").val();
var yy4=$("#element_4_3").val();
var li4=mm4+"/"+dd4+"/"+yy4;

var li35= $("#element_35").val();
var li6a= $("#element_6_1").val();
  var li6c= $("#element_6_3").val();
  var li6d= $("#element_6_4").val();
  var li6e= $("#element_6_5").val();
  var li6f= $("#element_6_6").val();

 
 var mm8=$("#element_8_1").val();
var dd8=$("#element_8_2").val();
var yy8=$("#element_8_3").val();
var li8=mm8+"/"+dd8+"/"+yy8;
 
 var mm9=$("#element_9_1").val();
var dd9=$("#element_9_2").val();
var yy9=$("#element_9_3").val();
var li9=mm9+"/"+dd9+"/"+yy9;
 
 var li36= $("#element_36").val();
 var li37= $("#element_37").val();
 var li12= $("#element_12").val();
 var li13= $("#element_13").val();
 var li14= $("#element_14").val();
 var li15= $("#element_15").val();
 var li16= $("#element_16").val();
 var li17= $("#element_17").val();
 var li18= $("#element_18").val();
 var li19= $("#element_19").val();
 var li20= $("#element_20").val();


 
var querystring ="&element_32_1="+li32a+"&element_32_2="+li32b+"&element_29="+li29+"&element_33="+li33+"&element_2="+li2+"&element_38="+li11+"&element_39="+li7+"&element_40="+li7+"&element_35="+li35+"&element_6_1="+li6a+"&element_6_3="+li6c+"&element_6_4="+li6d+"&element_6_5="+li6e+"&element_6_6="+li6f+"&element_41="+li9+"&element_42="+li8+"&element_36="+li36+"&element_37="+li37+"&element_13="+li13+"&element_14="+li14+"&element_15="+li15+"&element_16="+li16+"&element_17="+li17+"&element_18="+li18+"&element_19="+li19+"&element_20="+li20;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=236118"+querystring;
$("#element_39").val(url);
});
});
