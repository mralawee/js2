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
 var li27= $("#element_27").val();
 var li28= $("#element_28").val();
 var li29= $("#element_29").val();
 var li31= $("#element_31").val();
 var li20a= $("#element_20_1").val();
 var li20b= $("#element_20_2").val();
var li22= $("#element_22").val();
	var li25= $("#element_25").val();
	var li26= $("#element_26").val();
 var ev2= $("#element_30").val();
	
 var mm= $("#element_23_1").val();
var dd= $("#element_23_2").val();
var yy= $("#element_23_3").val();
var li23= mm+"/"+dd+"/"+yy;
	
	 var li30;
if(ev2=="1")
{
	li30="Excellent";
}
else if(ev2=="2")
{
	li30="Above Average";
}
 else if(ev2=="3")
{
	li30="Average";
}
 else if(ev2=="4")
{
	li30="Below Average";
}
var profsign=$("#element_32").val();
var stusign=$("#element_17").val();
	stusign = stusign.replace(/"/g,'@');
var querystring ="&element_4_1="+li4a+"&element_4_2="+li4b+"&element_5="+li5+"&element_19="+li19+"&element_12="+li12+"&element_18="+li18+"&element_6="+li6+"&element_9="+li9+"&element_13="+li13+"&element_16="+li16+"&element_27="+li27+"&element_28="+li28+"&element_29="+li29+"&element_31="+li31+"&element_20_1="+li20a+"&element_20_2="+li20b+"&element_32="+li23+"&element_33="+li30+"&element_22="+li22+"&element_25="+li25+"&element_26="+li26+"&element_42="+profsign+"&element_43="+stusign;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=213202"+querystring;
$("#element_32").val(url);
});
});
