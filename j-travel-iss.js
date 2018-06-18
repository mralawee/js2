$(function(){
 var name1= $("#element_32_1").val();
var name2= $("#element_32_2").val();
 var cwid= $("#element_29").val();
  var email= $("#element_33").val();
 var sevis= $("#element_2").val();
 var proed= $("#element_38").val();
 var pased= $("#element_39").val();
 var visaed= $("#element_40").val();
 var add= $("#element_35").val();
 var street= $("#element_6_1").val();
 var city= $("#element_6_3").val();
 var state= $("#element_6_4").val();
 var zip= $("#element_6_5").val();
 var coc= $("#element_6_6").val();
 var dep= $("#element_41").val();
 var ret= $("#element_42").val();
 var tcoc= $("#element_36").val();
 var dpen= $("#element_37").val();
 
  var dpen1= $("#element_13").val();
   var sev1= $("#element_14").val();
   var dpen2= $("#element_15").val();
    var sev2= $("#element_16").val();
     var dpen3= $("#element_17").val();
      var sev3= $("#element_18").val();
       var dpen4= $("#element_19").val();
        var sev4= $("#element_20").val();
 
 $("#submit_form").click(function(e){
$("#element_32_1").val(name1);
$("#element_32_2").val(name2);
$("#element_29").val(cwid);
$("#element_33").val(email);
$("#element_2").val(sevis);
$("#element_38").val(proed);
$("#element_39").val(pased);
$("#element_40").val(visaed);
$("#element_35").val(add);
$("#element_6_1").val(street);
$("#element_6_3").val(city);
$("#element_6_4").val(state);
$("#element_6_5").val(zip);
$("#element_6_6").val(coc);
$("#element_41").val(dep);
$("#element_42").val(ret);
$("#element_36").val(tcoc);
$("#element_37").val(dpen);
$("#element_13").val(dpen1);
$("#element_14").val(sev1);
$("#element_15").val(dpen2);
$("#element_16").val(sev2);
$("#element_17").val(dpen3);
$("#element_18").val(sev3);
$("#element_19").val(dpen4);
$("#element_20").val(sev4);
  
  var reasons = "";
  var reasonsfordenial1 = $("input[name='element_48_1']:checked").val();
  var reasonsfordenial2 = $("input[name='element_48_2']:checked").val();
  var reasonsfordenial3 = $("input[name='element_48_3']:checked").val();
  
 if (reasonsfordenial1 == 1) {
   var reason1;
            reason1 = "-Bursar balance is higher than 100$ or payment plan has not been set up. ";
   reasons = reasons + reason1;
        }
 if (reasonsfordenial2 == 1) {
   var reason2;
            reason2 = "-Address has not been changed in self service. ";
   reasons = reasons + reason2;
        } 
 if (reasonsfordenial3 == 1) {
  var li18=  $("#element_49").val();
   reasons = reasons + " -" + li18 + "." ;
        }
   $("#element_49").val(reasons);
});
  });
