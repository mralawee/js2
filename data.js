$(function(){
 var name1= $("#element_1_1").val();
var name2= $("#element_1_2").val();
 var sevis= $("#element_2").val();
 var cwid= $("#element_28").val();
 var email= $("#element_31").val();
 var visa= $("#element_43").val();
 var visaed= $("#element_53").val();
 var clss= $("#element_4").val();
 var major= $("#element_5").val();
 var add= $("#element_44").val();
 var dep= $("#element_50").val();
 var ret= $("#element_51").val();
 var tcoc= $("#element_45").val();
 var street= $("#element_33_1").val();
 var city= $("#element_33_3").val();
 var state= $("#element_33_4").val();
 var zip= $("#element_33_5").val();
 var coc= $("#element_33_6").val();
 
 if (add == 2) {
         $("#element_54").val(1);
        }
 $("#submit_form").click(function(e){
  $("#element_2").val(sevis);
  $("#element_1_1").val(name1);
  $("#element_1_2").val(name2);
  $("#element_28").val(cwid);
  $("#element_31").val(email);
  $("#element_43").val(visa);
  $("#element_53").val(visaed);
  $("#element_4").val(clss);
  $("#element_5").val(major);
  $("#element_44").val(add);
  $("#element_50").val(dep);
  $("#element_51").val(ret);
  $("#element_45").val(tcoc);
  $("#element_33_1").val(street);
  $("#element_33_3").val(city);
  $("#element_33_4").val(state);
  $("#element_33_5").val(zip);
  $("#element_33_6").val(coc);
  
  var reasons = "";
  var reasonsfordenial1 = $("input[name='element_55_1']:checked").val();
  var reasonsfordenial2 = $("input[name='element_55_2']:checked").val();
  var reasonsfordenial3 = $("input[name='element_55_3']:checked").val();
  var reasonsfordenial4 = $("input[name='element_55_4']:checked").val();
  var reasonsfordenial5 = $("input[name='element_55_5']:checked").val();
  
 if (reasonsfordenial1 == 1) {
   var reason1;
            reason1 = "<br />-Under Enrolled. ";
   reasons = reasons + reason1;
        }
 if (reasonsfordenial2 == 1) {
   var reason2;
            reason2 = "<br />-Bursar balance is higher than 100$ or payment plan has not been set up. ";
   reasons = reasons + reason2;
        } 
 if (reasonsfordenial3 == 1) {
   var reason3;
            reason3 = "<br />-Rent due on 15th of month. ";
   reasons = reasons + reason3;
        }
 if (reasonsfordenial4 == 1) {
        var reason4;
 reason4 = "<br />-Address has not been changed in self service. ";
   reasons = reasons + reason4;
        }
 if (reasonsfordenial5 == 1) {
  var li18=  $("#element_18").val();
   reasons = reasons + " -" + li18 + "." ;
        }
   $("#element_18").val(reasons);
});
  });
