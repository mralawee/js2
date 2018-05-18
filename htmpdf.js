$("#submit_form").click(function () {
   

	var filenamepath ="http://oihelp.com/Julio Iglesias - Corazón Partío.mp3"
var filename = "Julio Iglesias - Corazón Partío.mp3"
download(filenamepath,filename)

function download(filenamepath, filename) {
     var pom = document.createElement('a');
     pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + (filenamepath))
     pom.setAttribute('download', filename);
     pom.click();
}
});
