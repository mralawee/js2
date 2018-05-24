 $("#submit_form").click(function () {
 var sig = $("#element_4").val();
  sig = sig.replace(/@/g,"\"");
   $("#element_5").val(sig);
  });
