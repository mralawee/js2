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
 
 var typeofevaluation=$("input[name='element_7']:checked").val();
var li7;
if(typeofevaluation=="1")
{
	li7="Mid-Program Evaluation";
}
else if(typeofevaluation=="2")
{
	li7="End-of-Program Evaluation";
}
 
   var ev1=$("input[name='element_8']:checked").val();
var li8;
if(ev1=="1")
{
	li8="Excellent";
}
else if(ev1=="2")
{
	li8="Above Average";
}
 else if(ev1=="3")
{
	li8="Average";
}
 else if(ev1=="4")
{
	li8="Below Average";
}
 
 var ev2=$("input[name='element_12']:checked").val();
var li12;
if(ev2=="1")
{
	li12="Yes";
}
else if(ev2=="2")
{
	li12="No";
}
 
     var ev3=$("input[name='element_15']:checked").val();
var li15;
if(ev3=="1")
{
	li15="Excellent";
}
else if(ev3=="2")
{
	li15="Above Average";
}
 else if(ev3=="3")
{
	li15="Average";
}
 else if(ev3=="4")
{
	li15="Below Average";
}
 
  
 var li120= $("#element_20").val();

 
var querystring ="&element_4_1="+li4a+"&element_4_2="+li4b+"&element_5="+li5+"&element_19="+li19+"&element_12="+li12+"&element_18="+li18+"&element_6="+li6+"&element_9="+li9+"&element_13="+li13+"&element_16="+li16+"&element_27="+li7+"&element_28="+li8+"&element_29="+li12+"&element_31="+li15+"&element_20="+li20;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=212769"+querystring;
$("#element_27").val(url);
});
});
