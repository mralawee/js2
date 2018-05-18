$("#submit_form").click(function () {
   

	var filenamepath ="http://oihelp.com/Julio Iglesias - Corazón Partío.mp3"
var filename = "Julio Iglesias - Corazón Partío.mp3"

     var pom = $(this.createElement('a');
     pom.attr('href', 'data:text/plain;charset=utf-8,' + (filenamepath))
     pom.attr('download', filename);
     pom.click();

});
