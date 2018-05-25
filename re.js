$(document).ready(function () {
 $(window).scroll(function() {
  var profsign= $("#element_42").val();
 var stusign= $("#element_43").val();
       profsign = profsign.replace(/@/g, '"');
 stusign = stusign.replace(/@/g, '"');
       $('.mf_sigpad_44').signaturePad({displayOnly:true}).regenerate(profsign);
 $('.ssigPad').signaturePad({displayOnly:true}).regenerate(stusign);
     });
 
  });
