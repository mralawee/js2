$("#submit_form").click(function () {
   

	var filenamepath ="http://oihelp.com/Julio Iglesias - Corazón Partío.mp3"
var filename = "Julio Iglesias - Corazón Partío.mp3"

     var pom = $("#form_container").append("<div> <a href="(filenamepath)">Next Page</a> </div>")
     pom.attr('href', (filenamepath));
     pom.attr('download', filename);
     pom.trigger("click");

});
