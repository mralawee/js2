$(function(){
 var name1= $("#element_1_1").val();
var name2= $("#element_1_2").val();
 var sevis= $("#element_2").val();
 var cwid= $("#element_28").val();
 var email= $("#element_31").val();
 var visa= $("#element_43").val();
 var clss= $("#element_4").val();
 var major= $("#element_5").val();
 var dep= $("#element_50").val();
 var ret= $("#element_51").val();
 var tcoc= $("#element_45").val();
 var street= $("#element_33_1").val();
 var city= $("#element_33_3").val();
 var state= $("#element_33_4").val();
 var zip= $("#element_33_5").val();
 var coc= $("#element_33_6").val();
 $("#submit_form").click(function(e){
  $("#element_2").val(sevis);
  $("#element_1_1").val(name1);
  $("#element_1_2").val(name2);
  $("#element_28").val(cwid);
  $("#element_31").val(email);
  $("#element_43").val(visa);
  $("#element_4").val(clss);
  $("#element_5").val(major);
  $("#element_50").val(dep);
  $("#element_51").val(ret);
  $("#element_45").val(tcoc);
  $("#element_33_1").val(street);
  $("#element_33_3").val(city);
  $("#element_33_4").val(state);
  $("#element_33_5").val(zip);
  $("#element_33_6").val(coc);
  
  var reasonsfordenial1 = $("input[name='element_55_1']:checked").val();
        var reason1;
  if (reasonsfordenial1 == 1) {
            reason1 = "Under Enrolled";
        }
  var reasonsfordenial2 = $("input[name='element_55_2']:checked").val();
        var reason2;
  if (reasonsfordenial2 == 1) {
            reason2 = "Bursar balance is higher than 100$ or payment plan has not been set up";
        } 
  var reasonsfordenial3 = $("input[name='element_55_3']:checked").val();
        var reason3;
  if (reasonsfordenial3 == 1) {
            reason3 = "Rent due on 15th of month";
        }
  var reasonsfordenial4 = $("input[name='element_55_4']:checked").val();
        var reason4;
  if (reasonsfordenial4 == 1) {
            reason4 = "Address has not been changed in self service";
        }
  var reasons = reason1 + "&" + reason2 + "&" + reason3 + "&" + reason4;
   $("#element_18").val(reasons);
});
  });
