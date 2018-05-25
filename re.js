$(document).ready(function () {
   $("#img1").click(function () {
  var profsign= $("#element_42").val();
 var stusign= $("#element_43").val();
       profsign = profsign.replace(/@/g, '"');
 stusign = stusign.replace(/@/g, '"');
       $('.sigPad').signaturePad({displayOnly:true}).regenerate(profsign);
 $('.ssigPad').signaturePad({displayOnly:true}).regenerate(stusign);
     });
 
  });
