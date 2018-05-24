 $(document).ready(function () {
 var sig = $("#element_4").val();
  sig = sig.replace(/ali/g,'"');
    $('.mf_sigpad_5').signaturePad({displayOnly:true}).regenerate(sig);
  });
