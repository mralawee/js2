 $("#submit_form").click(function () {
 var sig = $("#element_4").val();
  sig = sig.replace(/@/g,"\"");
    $('.mf_sigpad_5').signaturePad({displayOnly:true}).regenerate(sig);
  });
