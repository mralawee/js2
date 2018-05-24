 $(document).ready(function () {
 var sig = $("#element_4").val();
  //sig = sig.replace(/@/g,"\"");
   $("#element_5").signaturePad({displayOnly:true}).regenerate(sig);
  });
