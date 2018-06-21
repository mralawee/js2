$(function() {
  
			

  $("#element_24").each(function(){
var querystring = $("#element_24").val();
querystring = querystring.replace(/\--/g,'\n');
$("#element_24").val(querystring);
});
	
	var sigpad_options_25 = {
				drawOnly : true,
				displayOnly: true,
				bgColour: '#fff',
				penColour: '#000',
				validateFields: false
			};
			var sigpad_data_25 = $("#element_26").val();
  sigpad_data_25 = sigpad_data_25.replace(/-/g, '"');
		$("#element_26").val(sigpad_data_25);
		
	
	
			$('#mf_sigpad_25').signaturePad(sigpad_options_25).regenerate(sigpad_data_25);
	
});
