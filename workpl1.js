$(function() {
	GetParameterValues();
function GetParameterValues() { 
//get the URL   
            var url = window.location.href.slice(window.location.href.indexOf('?') +1).split('&');
                var urlparam = String(url).split('=');  
                 //last name
 				  var v1 = urlparam[2].split(",");
				  var v1s=v1[0];
                  $("#element_1").val(v1s);
				  //first name
				  v1 = urlparam[3].split(",");
				   v1s=v1[1];
				  $("#element_2").val(v1[0]);
				 //banner id
				 v1 = urlparam[4].split(",");
				   v1s=v1[1];
				  $("#element_4").val(v1[0]);
				  //sevis id
				   v1 = urlparam[5].split(",");
				   v1s=v1[1];
				  $("#element_5").val(v1[0]);
				  //email
				   v1 = urlparam[6].split(",");
				   v1s=v1[1];
				  $("#element_24").val(v1[0]);
				  //expected grad sem wth year
				   v1 = urlparam[7].split(",");
				   var v2 =v1[0].split("%20");
				   
				   v1s=v2[0]+" "+v2[1];
				  $("#element_8").val(v1s);
				  //sponsored student
				   v1 = urlparam[8].split(",");
				   v1s=v1[1];
				  $("#element_27").val(v1[0]);
				  //grad assitantship
				    v1 = urlparam[9].split(",");
				   v1s=v1[1];
				  $("#element_28").val(v1[0]);
				  //department
				  v1 = urlparam[10].split(",");
				   v1s=v1[1];
				  $("#element_11").val(v1[0]);
				  //status
				   v1 = urlparam[11].split(",");
				   v1s=v1[1];
				  $("#element_25").val(v1[0]);
				  //eli
				    v1 = urlparam[13].split(",");
				   v1s=v1[1];
				  $("#element_26").val(v1[0]);
				  //coc
				    v1 = urlparam[14].split(",");
				   v1s=v1[1];
				  $("#element_19").val(v1[0]);
				  //residency
				    v1 = urlparam[15].split(",");
				   v1s=v1[1];
				  $("#element_20").val(v1[0]);
				  //doe to US
				   v1 = urlparam[16].split(",");
				   v1s=v1[1];
				  $("#element_29").val(v1[0]);
               }
});
$(function() {
    $("#submit_form").click(function(e) {
        var lastName = $("#element_1").val();
        var firstName = $("#element_2").val();
        var bannerId = $("#element_4").val();
        var sevisId = $("#element_5").val();
        var emailid = $("#element_24").val();
        var gradsem = $("#element_8").val();
        var sponsoredStudent = $("#element_27").val();
        var ga = $("#element_28").val();
        var dept = $("#element_11").val();
        var status = $("#element_25").val();
        var eli = $("#element_26").val();
        var coc = $("#element_19").val();
        var cor = $("#element_20").val();
        var doe = $("#element_29").val();
        var levelofstudy = $("input[name='element_31']:checked").val();
        var los;
        if (levelofstudy == 1) {
            los = "Undergrad";
        } else if (levelofstudy == 2) {
            los = "Masters";
        } else if (levelofstudy == 3) {
            los = "PHD";
        }
        var hours = $("#element_32").val();
        var i20mm = $("#element_33_1").val();
        var i20dd = $("#element_33_2").val();
        var i20y = $("#element_33_3").val();
        var i20date = i20mm + "/" + i20dd + "/" + i20y;
        var passportvalid = $("input[name='element_34']:checked").val();
        var ppv;
        if (passportvalid == 1) {
            ppv = "Yes";
        } else {
            ppv = "No";
        }
        var querystringurl = "&ln=" + lastName + "&fn=" + firstName + "&bi=" + bannerId + "&si=" + sevisId + "&email=" + emailid + "&gradsem=" + gradsem + "&ss=" + sponsoredStudent + "&ga=" + ga + "&dept=" + dept + "&status=" + status + "&eli=" + eli + "&coc=" + coc + "&cor=" + cor + "&doe=" + doe + "&los=" + los + "&hrs=" + hours + "&i20date=" + i20date + "&ppv=" + ppv;
        var url = "https://okstate.forms-db.com/view.php?id=471147" + querystringurl;
		$("#element_35").val(url);
    });
});
