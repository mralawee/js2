 $(document).ready(function () {
  $("#img1").click(function () {
     var sig= $("#element_1").val();
    $('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
    });
  });
