$(document).ready(function () {
  var profsign= $("#element_42").val();
 var stusign= $("#element_43").val();
       profsign = profsign.replace(/@/g, '"');
 stusign = stusign.replace(/@/g, '"');
       $('.sigPad').signaturePad({displayOnly:true}).regenerate(profsign);
 $('.mf_canvas_pad').signaturePad({drawOnly:true}).regenerate(stusign);
});
