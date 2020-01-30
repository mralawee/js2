$(function(){

var validval=$("#element_39").val();
//hide the continue button when page loads
if(validval=="")
{
$("#submit_primary").hide();
$("#validateCWID").show();
}
//hide the validate button if participant is valid
else if( validval!='InValid_Participant')
{
	$("#validateCWID").hide();
	$("#submit_primary").show();
	sessionStorage.setItem("showvaliditybutton", "no");
}


//append the validate cwid button
$("#li_buttons").append('<input type="button" name="validateCWID" value="Validate CWID" id="validateCWID"/>');
$("#validateCWID").click(function(e)
{
alert("Validating your CWID. Please be patient as it might take some time depending on the load on server and your Bandwidth.");
var str=$("#element_38").val();
//ajax call
 $.ajax({
	 type:"GET",
	 async:true,
    url: "https://script.google.com/macros/s/AKfycbz-4vAZ0j7PYV8pRrviec7zGD4_fkULJxsISp5-oZIvhS8BTpbJ/exec",
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
alert("Sorry you are not a valid participant for the quiz. This might be because you have not attended an OPT session or have written permission from ISS or have already taken the quiz three times unsuccessfully. Please attend one of the OPT sessions. You can get the date from ISS OPT website. If you can't attend OPT session, please contact Regina Henry in ISS office to resolve this issue.");
$("#element_39").val(responsedata.output);
$("#validateCWID").show();
$("#submit_primary").hide();
}
//valid participant
else
{
alert("You are eligible to take the quiz. This is your Attempt#"+responsedata.output);
$("#element_39").val(responsedata.output);
$("#submit_primary").show();
$("#validateCWID").hide();
}
}//end on ajax success
 
});
	
});
var data = sessionStorage.getItem('showvaliditybutton');
	if(data=="no")
	{
		$("#validateCWID").hide();
	}
});
