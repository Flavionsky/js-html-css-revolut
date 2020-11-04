// Quando la pagina ha terminato di caricarsi
$(document).ready(function() {

 $('.title-list').hover(function(){
   $(this).children('.dropdown').toggle();
 })

});
