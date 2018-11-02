$(function(){
$("#submit_secondary").hide();
var validval=$("#element_41").val();
//hide the continue button when page loads
if(validval=="")
{
$("#submit_primary").hide();
$("#validateCode").show();
}
//hide the validate button if participant is valid
else if( validval!='InValid_Participant')
{
	$("#validateCode").hide();
	$("#submit_primary").show();
	sessionStorage.setItem("showvaliditybutton", "no");
}


//append the validate cwid button
$("#li_buttons").append('<input type="button" name="validateCode" value="Validate Code" id="validateCode"/>');
$("#validateCode").click(function(e)
{
alert("Validating your Code. Please be patient as it might take some time depending on the load on server and your Bandwidth.");
var str=$("#element_40").val();
//ajax call
 $.ajax({
	 type:"GET",
	 async:true,
    url: "https://script.google.com/macros/s/AKfycbyVDB4U3rN8sMciknRJ-PwHmJohIhlbl8zYEdoz1gtozwKgZdM/exec",
    data: {"first":str },
	cache:false,
	dataType: "json",
	 error: function(xhr) {
        //Do Something to handle error

        alert(response);
    },
    success: function(response) {
   var responsedata = JSON.parse(response);
   //if invalid participant
if( responsedata.output=='InValid_Participant')
	
{
alert("Sorry you are not a valid participant for the quiz. Please contact ISS office immidiately to resolve this issue.");
$("#element_41").val(responsedata.output);
$("#validateCode").show();
$("#submit_primary").hide();
}
//valid participant
else
{
alert("You are eligible to take the quiz. This is your Attempt#"+responsedata.output);
$("#element_41").val(responsedata.output);
$("#submit_primary").show();
$("#validateCode").hide();
}
}//end on ajax success
 
});
	
});
var data = sessionStorage.getItem('showvaliditybutton');
	if(data=="no")
	{
		$("#validateCode").hide();
	}
});
