$(function() {
$("#submit_form").click(function(e){

 
//Name
var li3a= $("#element_3_1").val();
 var li3b= $("#element_3_2").val();
 
 //cwid:
var li14= $("#element_14").val();
 
 //email
var li18= $("#element_18").val();
 
 //Expected Date of Departure
 var mm15=$("#element_15_1").val();
var dd15=$("#element_15_2").val();
var yy15=$("#element_15_3").val();
var li15=mm15+"/"+dd15+"/"+yy15;

//Comments:
var li5= $("#element_5").val();

//List any cultural activities you have attended/participated in during your program at OSU.
var li6= $("#element_6").val();

 //Please check all that apply:
 var reasonsfordenial1 = $("input[name='element_4_1']:checked").val();
  var reasonsfordenial2 = $("input[name='element_4_2']:checked").val();
  var reasonsfordenial3 = $("input[name='element_4_3']:checked").val();
  var reasonsfordenial4 = $("input[name='element_4_4']:checked").val();

  
  var reasons = "";
  
 if (reasonsfordenial1 == 1) {
   var reason1;
            reason1 = "---I have successfully completed my program objectives. ";
   reasons = reasons + reason1;
        }
 if (reasonsfordenial2 == 1) {
   var reason2;
            reason2 = "---I have NOT met my program objectives. (Please comment below) ";
   reasons = reasons + reason2;
        } 
 if (reasonsfordenial3 == 1) {
  var reason3;
            reason3 = "---I will be leaving within 30 days after the expiration of my DS-2019. ";
   reasons = reasons + reason3;
        }
  if (reasonsfordenial4 == 1) {
  var reason4;
            reason4 = "---I will be leaving prior to the end date on my DS-2019. ";
   reasons = reasons + reason4;
        }
 
 
var querystring ="&element_3_1="+li3a+"&element_3_2="+li3b+"&element_19="+li15+"&element_20="+reasons+"&element_5="+li5+"&element_18="+li18+"&element_14="+li14+"&element_6="+li6;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=240536"+querystring;
$("#element_19").val(url);
});
});
