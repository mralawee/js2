 $(document).ready(function () {
  $("#img1").click(function () {
     var sig= $("#element_6").val();
   sig = sig.replace(/@/g, '"');
    $('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
    });
  });
