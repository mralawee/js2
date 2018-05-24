 $(document).ready(function () {
 var sig = $("#element_4").val();
  //sig = sig.replace(/@/g,"\"");
   $('.media').signaturePad({displayOnly:true}).regenerate(sig);
  });
