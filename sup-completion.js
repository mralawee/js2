$(function() {
$("#submit_form").click(function(e){

//Name of J-1 Visitor
var li3a= $("#element_3_1").val();
 var li3b= $("#element_3_2").val();
 
 //Program End Date
 var mm15=$("#element_15_1").val();
var dd15=$("#element_15_2").val();
var yy15=$("#element_15_3").val();
var li15=mm15+"/"+dd15+"/"+yy15;

//Comments:
var li5= $("#element_5").val();

//Name of Person Completing This Form
var li17a= $("#element_17_1").val();
var li17b= $("#element_17_2").val();

//Title
var li18= $("#element_18").val();

//email
var li21= $("#element_21").val();

//Department
var li19= $("#element_19").val();


 //Please check all that apply:
 var reasonsfordenial1 = $("input[name='element_4_1']:checked").val();
  var reasonsfordenial2 = $("input[name='element_4_2']:checked").val();
  var reasonsfordenial3 = $("input[name='element_4_3']:checked").val();
  var reasonsfordenial4 = $("input[name='element_4_4']:checked").val();
  var reasonsfordenial5 = $("input[name='element_4_5']:checked").val();
  var reasonsfordenial6 = $("input[name='element_4_6']:checked").val();
  
  var reasons = "";
  
 if (reasonsfordenial1 == 1) {
   var reason1;
            reason1 = "a--Scholar has successfully met the program objectives. ";
   reasons = reasons + reason1;
        }
 if (reasonsfordenial2 == 1) {
   var reason2;
            reason2 = "a--Scholar has NOT met the program objectives. ";
   reasons = reasons + reason2;
        } 
 if (reasonsfordenial3 == 1) {
  var reason3;
            reason3 = "a--Scholar is leaving the program earlier than anticipated. ";
   reasons = reasons + reason3;
        }
  if (reasonsfordenial4 == 1) {
  var reason4;
            reason4 = "a--Scholar has already terminated participation in the program. ";
   reasons = reasons + reason4;
        }
 if (reasonsfordenial5 == 1) {
  var reason5;
            reason5 = "a--Scholar maximized his/her stay as a J-1 scholar. ";
   reasons = reasons + reason5;
        }
if (reasonsfordenial6 == 1) {
  var reason6;
            reason6 = "a--Alternative nonimmigrant options to continue program participation were discussed with this scholar (i.e. Change of Status to H1-B or other visa). ";
   reasons = reasons + reason6;
        }
 
var querystring ="&element_3_1="+li3a+"&element_3_2="+li3b+"&element_23="+li15+"&element_24="+reasons+"&element_5="+li5+"&element_17_1="+li17a+"&element_17_2="+li17b+"&element_18="+li18+"&element_21="+li21+"&element_19="+li19;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=237848"+querystring;
$("#element_23").val(url);
});
});
