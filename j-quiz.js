$(function(){

var validval=$("#element_41").val();
//hide the continue button when page loads
if(validval=="")
{
$("#submit_primary").hide();
$("#validateCODE").show();
}
//hide the validate button if participant is valid
else if( validval!='InValid_Participant')
{
	$("#validateCODE").hide();
	$("#submit_primary").show();
	sessionStorage.setItem("showvaliditybutton", "no");
}


//append the validate cwid button
$("#li_buttons").append('<input type="button" name="validateCODE" value="Validate CODE" id="validateCODE"/>');
$("#validateCODE").click(function(e)
{
alert("Validating your CODE. Please be patient as it might take some time depending on the load on server and your Bandwidth.");
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
alert("Sorry you are not a valid participant for the quiz. This might be because you have already taken the quiz two times unsuccessfully. Please contact Sayaka Isoda in ISS office to resolve this issue.");
$("#element_41").val(responsedata.output);
$("#validateCODE").show();
$("#submit_primary").hide();
}
//valid participant
else
{
alert("You are eligible to take the quiz. This is your Attempt#"+responsedata.output);
$("#element_41").val(responsedata.output);
$("#submit_primary").show();
$("#validateCODE").hide();
}
}//end on ajax success
 
});
	
});
var data = sessionStorage.getItem('showvaliditybutton');
	if(data=="no")
	{
		$("#validateCODE").hide();
	}
});
