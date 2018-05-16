$("#submit_form").click(function () {
	$.getScript("http://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js", function(){

   alert("Script loaded but not necessarily executed.");

});
	var doc = new jsPDF();
var specialElementHandlers = {
    '#form_209011': function (element, renderer) {
        return true;
    }
};
    doc.fromHTML($('#form_209011').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});
