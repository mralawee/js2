$(function() {
  
			

  $("#element_24").each(function(){
var querystring = $("#element_24").val();
querystring = querystring.replace(/\--/g,'\n');
$("#element_24").val(querystring);
});
	
	
			var sigpad_data = $("#element_26").val();
  sigpad_data = sigpad_data.replace(/-/g, '"');
		$("#element_26").val(sigpad_data);
		
	var sigpad_options = {
				drawOnly : true,
				displayOnly: true,
				bgColour: '#fff',
				penColour: '#000',
				validateFields: false
			};
	
			$('#mf_sigpad_25').signaturePad(sigpad_options).regenerate(sigpad_data);
	
});
