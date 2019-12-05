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
 var ev1= $("#element_7").val();
 var ev2= $("#element_8").val();
 var ev3= $("#element_12").val();
 var ev4= $("#element_15").val();
 var li20a= $("#element_20_1").val();
 var li20b= $("#element_20_2").val();

var li7;
if(ev1=="1")
{
	li7="Mid-Program Evaluation";
}
else if(ev1=="2")
{
	li7="End-of-Program Evaluation";
}
 

var li8;
if(ev2=="1")
{
	li8="Excellent";
}
else if(ev2=="2")
{
	li8="Above Average";
}
 else if(ev2=="3")
{
	li8="Average";
}
 else if(ev2=="4")
{
	li8="Below Average";
}
 
var li12;
if(ev3=="1")
{
	li12="Yes";
}
else if(ev3=="2")
{
	li12="No";
}
 
var li15;
if(ev4=="1")
{
	li15="Excellent";
}
else if(ev4=="2")
{
	li15="Above Average";
}
 else if(ev4=="3")
{
	li15="Average";
}
 else if(ev4=="4")
{
	li15="Below Average";
}
 
var querystring ="&element_4_1="+li4a+"&element_4_2="+li4b+"&element_5="+li5+"&element_19="+li19+"&element_12="+li12+"&element_18="+li18+"&element_6="+li6+"&element_9="+li9+"&element_13="+li13+"&element_16="+li16+"&element_27="+li7+"&element_28="+li8+"&element_29="+li12+"&element_31="+li15+"&element_20_1="+li20a+"&element_20_2="+li20b;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=457402"+querystring;
$("#element_27").val(url);
});
});
