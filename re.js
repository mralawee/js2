 $(document).ready(function () {
  $("#submit_form").click(function () {
     var sig= $("#element_1").val();
    $('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
    });
  });
