$(function() {
  
			var sigpad_options = {
				drawOnly : true,
				displayOnly: true,
				bgColour: '#fff',
				penColour: '#000',
				validateFields: false
			};
	$("#element_26").each(function(){
			var sigpad_data = $("#element_26").val();
  sigpad_data= sigpad_data.replace(/-/,'"');
			$('#mf_sigpad_25').signaturePad(sigpad_options).regenerate(sigpad_data);
	
	});
  $("#element_24").each(function(){
var querystring = $("#element_24").val();
querystring = querystring.replace(/\--/g,'\n');
$("#element_24").val(querystring);
});
});
