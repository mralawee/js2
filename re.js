 $(document).ready(function () {
  function playslider(){
     var sig= $("#element_1").val();
    $('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
   }   
playslider();
  });
