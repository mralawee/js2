$(function() {
$("#submit_form").click(function(e){
var lastName= $("#element_1").val();
var firstName=$("#element_2").val();
var bannerId=$("#element_4").val();
var sevisId=$("#element_5").val();
var emailid=$("#element_24").val();
var expectedgradsem=$("input[name='element_7']:checked").val();
var gradSemValue;
if(expectedgradsem=="1")
{
	gradSemValue="Fall";
}
else if(expectedgradsem=="2")
{
	gradSemValue="Summer";
}
else
{
	gradSemValue="Spring";
}
var expectedgradyear=$("#element_8").val();
var semwithyear=gradSemValue+" "+expectedgradyear;
var areYouSponsored=$("input[name='element_9']:checked").val();
var sponsoredVal;
if(areYouSponsored=="1")
{
	sponsoredVal="Yes";
}
else if(areYouSponsored=="2")
{
	sponsoredVal="No";
}

var gradAssistantship=$("input[name='element_10']:checked").val();
var gradAssistantVal;
if(gradAssistantship=="1")
{
	gradAssistantVal="Yes";
}
else if(gradAssistantship=="2")
{
	gradAssistantVal="No";
}
var department =$("#element_11").val();
var studentstatusstatus = $("input[name='element_12']:checked").val();
var statusOfStudent;
if(studentstatusstatus=="1")
{
	statusOfStudent="F1";
}
else if(studentstatusstatus=="2")
{
	statusOfStudent="J1";
}
else
{
	statusOfStudent="Other";
}
var statusComments = $("#element_13").val();
var eli = $("input[name='element_14']:checked").val();
var eliVal;
if(eli=="1")
{
	eliVal="Yes";
}
else if(eli=="2")
{
	eliVal="No";
}
var citizenship=$("#element_19").val();
var residency=$("#element_20").val();
var doemm=$("#element_22_1").val();
var doedd=$("#element_22_2").val();
var doey=$("#element_22_3").val();
var doeus=doemm+"/"+doedd+"/"+doey;
var querystring ="&ln="+lastName+"&fn="+firstName+"&bi="+bannerId+"&si="+sevisId+"&email="+emailid+"&swy="+semwithyear+"&sponsored="+sponsoredVal+"&ga="+gradAssistantVal+"&department="+department+"&ss="+statusOfStudent+"&sc="+statusComments+"&eli="+eliVal+"&csp="+citizenship+"&resdncy="+residency+"&doeinus="+doeus;
var url = "https://okstate.forms-db.com/view.php?id=176803"+querystring;
$("#element_26").val(url);
});
});
