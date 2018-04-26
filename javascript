$(function() {
    $("#submit_form").click(function(e) {
       var id = $("#element_1").val();
        document.getElementById(id).style.visibility = "visible";
      $("#element_1").show();
      
    }});
);

